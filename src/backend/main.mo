import Map "mo:core/Map";
import Array "mo:core/Array";
import List "mo:core/List";
import Order "mo:core/Order";
import Set "mo:core/Set";
import Text "mo:core/Text";
import Time "mo:core/Time";
import Int "mo:core/Int";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

actor {
  // Types
  public type ServiceCategory = {
    id : Nat;
    name : Text;
    price : Nat;
    description : Text;
  };

  public type BookingStatus = {
    #pending;
    #confirmed;
    #cancelled;
  };

  public type Booking = {
    id : Nat;
    user : Principal;
    serviceId : Nat;
    date : Time.Time;
    address : Text;
    status : BookingStatus;
  };

  public type Review = {
    id : Nat;
    user : Principal;
    serviceId : Nat;
    rating : Nat;
    comment : Text;
    timestamp : Time.Time;
  };

  public type UserProfile = {
    name : Text;
  };

  // Persistent state with updatable fields
  module ServiceCategory {
    public func compareByName(cat1 : ServiceCategory, cat2 : ServiceCategory) : { #less; #equal; #greater } {
      Text.compare(cat1.name, cat2.name);
    };

    public func compareByPrice(cat1 : ServiceCategory, cat2 : ServiceCategory) : { #less; #equal; #greater } {
      Int.compare(cat1.price, cat2.price);
    };
  };

  module Review {
    public func compareByRating(review1 : Review, review2 : Review) : { #less; #equal; #greater } {
      Int.compare(review2.rating, review1.rating); // descending order
    };
  };

  let serviceIdCounter = Map.singleton<Nat, Nat>(0, 1);
  let bookingIdCounter = Map.singleton<Nat, Nat>(0, 1);
  let reviewIdCounter = Map.singleton<Nat, Nat>(0, 1);

  let services = Map.empty<Nat, ServiceCategory>();
  let bookings = Map.empty<Nat, Booking>();
  let reviews = Map.empty<Nat, Review>();
  let userProfiles = Map.empty<Principal, UserProfile>();

  let accessControlState = AccessControl.initState();

  include MixinAuthorization(accessControlState);

  // User Profile Functions
  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can view profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  // Bookings
  public query ({ caller }) func getBookingsByCaller() : async [Booking] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can view bookings");
    };
    let callerBookings = List.empty<Booking>();

    for (booking in bookings.values()) {
      if (booking.user == caller) {
        callerBookings.add(booking);
      };
    };
    callerBookings.toArray();
  };

  public query ({ caller }) func getBookingById(id : Nat) : async Booking {
    switch (bookings.get(id)) {
      case (null) {
        Runtime.trap("Booking does not exist");
      };
      case (?booking) {
        if (booking.user != caller and not AccessControl.isAdmin(accessControlState, caller)) {
          Runtime.trap("Unauthorized: Can only view your own bookings");
        };
        booking;
      };
    };
  };

  public shared ({ caller }) func cancelBooking(id : Nat) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can cancel bookings");
    };
    switch (bookings.get(id)) {
      case (null) {
        Runtime.trap("Booking does not exist");
      };
      case (?booking) {
        if (booking.user != caller) {
          Runtime.trap("Unauthorized: You can only cancel your own bookings");
        };
        let updatedBooking = {
          id = booking.id;
          user = booking.user;
          serviceId = booking.serviceId;
          date = booking.date;
          address = booking.address;
          status = #cancelled;
        };
        bookings.add(id, updatedBooking);
      };
    };
  };

  public shared ({ caller }) func createBooking(serviceId : Nat, date : Time.Time, address : Text) : async Nat {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can create bookings");
    };
    let id = bookingIdCounter.size();
    let booking = {
      id;
      user = caller;
      serviceId;
      date;
      address;
      status = #pending;
    };
    bookings.add(id, booking);
    bookingIdCounter.add(id, id + 1);
    id;
  };

  // Reviews
  public query ({} : {}) func getReviewsByService(serviceId : Nat) : async [Review] {
    let serviceReviews = List.empty<Review>();

    for (review in reviews.values()) {
      if (review.serviceId == serviceId) {
        serviceReviews.add(review);
      };
    };

    serviceReviews.toArray();
  };

  public query ({} : {}) func getAllReviews() : async [Review] {
    reviews.values().toArray().sort(Review.compareByRating);
  };

  public shared ({ caller }) func submitReview(serviceId : Nat, rating : Nat, comment : Text) : async Nat {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can submit reviews");
    };
    let id = reviewIdCounter.size();
    let timestamp = Time.now();

    let review = {
      id;
      user = caller;
      serviceId;
      rating;
      comment;
      timestamp;
    };

    reviews.add(id, review);
    reviewIdCounter.add(id, id + 1);
    id;
  };

  // Services
  public query ({} : {}) func getAllServices() : async [ServiceCategory] {
    services.values().toArray();
  };

  public shared ({ caller }) func addService(name : Text, price : Nat, description : Text) : async Nat {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can add services");
    };

    if (name.size() == 0) {
      Runtime.trap("Service name cannot be empty");
    };

    let existingService = services.values().find(
      func(service) { service.name == name }
    );

    switch (existingService) {
      case (?_) {
        Runtime.trap("Service with this name already exists");
      };
      case (null) {
        let id = serviceIdCounter.size();
        let service = {
          id;
          name;
          price;
          description;
        };
        services.add(id, service);
        serviceIdCounter.add(id, id + 1);
        id;
      };
    };
  };

  public shared ({ caller }) func deleteService(id : Nat) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can delete services");
    };

    if (not services.containsKey(id)) {
      Runtime.trap("Service does not exist");
    };
    services.remove(id);
  };
};
