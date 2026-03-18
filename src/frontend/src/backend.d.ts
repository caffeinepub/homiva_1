import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ServiceCategory {
    id: bigint;
    name: string;
    description: string;
    price: bigint;
}
export type Time = bigint;
export interface Booking {
    id: bigint;
    status: BookingStatus;
    date: Time;
    user: Principal;
    address: string;
    serviceId: bigint;
}
export interface Review {
    id: bigint;
    user: Principal;
    comment: string;
    timestamp: Time;
    rating: bigint;
    serviceId: bigint;
}
export interface UserProfile {
    name: string;
}
export enum BookingStatus {
    cancelled = "cancelled",
    pending = "pending",
    confirmed = "confirmed"
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    addService(name: string, price: bigint, description: string): Promise<bigint>;
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    cancelBooking(id: bigint): Promise<void>;
    createBooking(serviceId: bigint, date: Time, address: string): Promise<bigint>;
    deleteService(id: bigint): Promise<void>;
    getAllReviews(): Promise<Array<Review>>;
    getAllServices(): Promise<Array<ServiceCategory>>;
    getBookingById(id: bigint): Promise<Booking>;
    getBookingsByCaller(): Promise<Array<Booking>>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getReviewsByService(serviceId: bigint): Promise<Array<Review>>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    isCallerAdmin(): Promise<boolean>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
    submitReview(serviceId: bigint, rating: bigint, comment: string): Promise<bigint>;
}
