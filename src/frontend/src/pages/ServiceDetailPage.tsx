import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowLeft,
  Calendar,
  CheckCircle2,
  Clock,
  Loader2,
  MapPin,
  Star,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import type { NavState } from "../App";
import { SERVICES, getService } from "../data/services";
import { useInternetIdentity } from "../hooks/useInternetIdentity";
import { useCreateBooking } from "../hooks/useQueries";

interface ServiceDetailPageProps {
  serviceId: string;
  navigate: (state: NavState) => void;
  onAuthOpen: () => void;
}

const TIME_SLOTS = [
  "08:00 AM",
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
  "06:00 PM",
];

export default function ServiceDetailPage({
  serviceId,
  navigate,
  onAuthOpen,
}: ServiceDetailPageProps) {
  const service = getService(serviceId);
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [address, setAddress] = useState("");
  const [selectedSubService, setSelectedSubService] = useState(0);
  const [booked, setBooked] = useState(false);

  const { identity } = useInternetIdentity();
  const { mutateAsync: createBooking, isPending } = useCreateBooking();

  if (!service) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <p>Service not found.</p>
        <Button onClick={() => navigate({ page: "home" })}>Go Home</Button>
      </div>
    );
  }

  const handleBook = async () => {
    if (!identity) {
      onAuthOpen();
      return;
    }
    if (!date || !timeSlot || !address.trim()) {
      toast.error("Please fill in all booking details.");
      return;
    }
    try {
      const dateMs = BigInt(new Date(`${date} ${timeSlot}`).getTime());
      await createBooking({
        serviceId: service.backendId,
        date: dateMs,
        address,
      });
      setBooked(true);
      toast.success("Booking confirmed! 🎉");
    } catch {
      toast.error("Booking failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <button
          type="button"
          onClick={() => navigate({ page: "home" })}
          className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-gray-700 hover:bg-white transition-colors"
          data-ocid="service.link"
        >
          <ArrowLeft size={18} />
        </button>
        <div className="absolute bottom-6 left-6">
          <div className="text-4xl mb-2">{service.icon}</div>
          <h1 className="text-3xl font-extrabold text-white">
            {service.title}
          </h1>
          <div className="flex items-center gap-2 mt-1">
            <Badge className="bg-violet-500 text-white border-0 text-sm font-semibold">
              {service.price} {service.priceNote}
            </Badge>
            <div className="flex items-center gap-1 text-white/80 text-sm">
              <Star size={13} fill="currentColor" className="text-yellow-400" />
              <span>4.8 (120+ reviews)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Service switcher */}
      <div className="bg-white border-b border-gray-100 overflow-x-auto">
        <div className="flex">
          {SERVICES.map((svc) => (
            <button
              type="button"
              key={svc.id}
              onClick={() => navigate({ page: "service", serviceId: svc.id })}
              className={`flex items-center gap-1.5 whitespace-nowrap px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                svc.id === serviceId
                  ? "border-pink-600 text-pink-600"
                  : "border-transparent text-gray-500 hover:text-pink-600"
              }`}
              data-ocid="service.tab"
            >
              <span>{svc.icon}</span>
              <span>{svc.title}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Details */}
          <div>
            <Tabs defaultValue="services">
              <TabsList className="w-full rounded-full bg-muted p-1 mb-6">
                <TabsTrigger
                  value="services"
                  className="rounded-full flex-1"
                  data-ocid="service.tab"
                >
                  Services
                </TabsTrigger>
                {service.packages && (
                  <TabsTrigger
                    value="packages"
                    className="rounded-full flex-1"
                    data-ocid="service.tab"
                  >
                    Packages
                  </TabsTrigger>
                )}
                <TabsTrigger
                  value="about"
                  className="rounded-full flex-1"
                  data-ocid="service.tab"
                >
                  About
                </TabsTrigger>
                {service.pricing && (
                  <TabsTrigger
                    value="pricing"
                    className="rounded-full flex-1"
                    data-ocid="service.tab"
                  >
                    Pricing
                  </TabsTrigger>
                )}
              </TabsList>

              <TabsContent value="services">
                <div className="space-y-4">
                  {service.subServices.map((sub, i) => (
                    <motion.div
                      key={sub.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Card
                        className={`border-2 cursor-pointer rounded-2xl transition-all ${
                          selectedSubService === i
                            ? "border-pink-500 bg-pink-50"
                            : "border-transparent hover:border-pink-200"
                        }`}
                        onClick={() => setSelectedSubService(i)}
                        data-ocid={`service.item.${i + 1}`}
                      >
                        <CardContent className="p-5">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h3 className="font-bold text-gray-900">
                                {sub.name}
                              </h3>
                              <p className="text-sm text-gray-500">
                                {sub.description}
                              </p>
                            </div>
                            {selectedSubService === i && (
                              <CheckCircle2
                                className="text-pink-600 shrink-0"
                                size={20}
                              />
                            )}
                          </div>
                          <ul className="space-y-1.5">
                            {sub.items.map((item) => (
                              <li
                                key={item}
                                className="flex items-center gap-2 text-sm text-gray-700"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-pink-500 shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              {service.packages && (
                <TabsContent value="packages">
                  <div className="space-y-4">
                    {service.packages.map((pkg, i) => (
                      <Card
                        key={pkg.name}
                        className="border-0 shadow-card rounded-2xl"
                        data-ocid={`service.item.${i + 1}`}
                      >
                        <CardContent className="p-5">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h3 className="font-bold text-gray-900">
                                {pkg.name}
                              </h3>
                              <p className="text-sm text-gray-500">
                                {pkg.duration}
                              </p>
                            </div>
                            <div className="text-xl font-bold text-pink-600">
                              {pkg.price}
                            </div>
                          </div>
                          <ul className="space-y-1.5">
                            {pkg.features.map((f) => (
                              <li
                                key={f}
                                className="flex items-center gap-2 text-sm text-gray-700"
                              >
                                <CheckCircle2
                                  size={14}
                                  className="text-pink-500 shrink-0"
                                />
                                {f}
                              </li>
                            ))}
                          </ul>
                          <Button
                            className="mt-4 w-full rounded-full bg-violet-500 hover:bg-violet-600 text-white font-semibold"
                            data-ocid={`service.item.${i + 1}.primary_button`}
                          >
                            Choose {pkg.name}
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              )}

              <TabsContent value="about">
                <Card className="border-0 shadow-card rounded-2xl">
                  <CardContent className="p-5">
                    <p className="text-gray-700 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {[
                        "KYC Verified",
                        "Police Verified",
                        "Trained & Certified",
                        "GPS Tracked",
                      ].map((badge) => (
                        <Badge
                          key={badge}
                          variant="secondary"
                          className="rounded-full text-xs"
                        >
                          ✓ {badge}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {service.pricing && (
                <TabsContent value="pricing">
                  <Card className="border-0 shadow-card rounded-2xl">
                    <CardContent className="p-4">
                      <Table>
                        <TableHeader>
                          <TableRow className="bg-muted/50">
                            <TableHead className="font-semibold">
                              Service
                            </TableHead>
                            <TableHead className="font-semibold text-right">
                              Price
                            </TableHead>
                            <TableHead className="font-semibold text-right">
                              Unit
                            </TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {service.pricing.map((item) => (
                            <TableRow key={item.label}>
                              <TableCell className="text-sm text-gray-700">
                                {item.label}
                              </TableCell>
                              <TableCell className="text-right font-mono font-bold text-pink-700">
                                {item.price}
                              </TableCell>
                              <TableCell className="text-right text-xs text-gray-400">
                                {item.note}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                </TabsContent>
              )}
            </Tabs>
          </div>

          {/* Right: Booking form */}
          <div>
            <Card className="border-0 shadow-card rounded-2xl sticky top-24">
              <CardContent className="p-6">
                {booked ? (
                  <div
                    className="text-center py-6"
                    data-ocid="booking.success_state"
                  >
                    <div className="text-5xl mb-4">🎉</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Booking Confirmed!
                    </h3>
                    <p className="text-gray-500 text-sm mb-6">
                      A verified caregiver will arrive at your address within
                      15–20 minutes.
                    </p>
                    <Button
                      onClick={() => navigate({ page: "bookings" })}
                      className="rounded-full bg-pink-600 hover:bg-pink-700 text-white w-full font-semibold"
                      data-ocid="booking.primary_button"
                    >
                      View My Bookings
                    </Button>
                    <Button
                      variant="ghost"
                      className="w-full mt-2 rounded-full"
                      onClick={() => setBooked(false)}
                      data-ocid="booking.secondary_button"
                    >
                      Book Another
                    </Button>
                  </div>
                ) : (
                  <>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      Book {service.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-5">
                      {service.subServices[selectedSubService]?.name} ·{" "}
                      {service.price}/{service.priceNote}
                    </p>

                    <div className="space-y-4">
                      <div>
                        <Label
                          htmlFor="date"
                          className="text-sm font-medium text-gray-700 mb-1.5 block"
                        >
                          <Calendar size={14} className="inline mr-1" />
                          Select Date
                        </Label>
                        <Input
                          id="date"
                          type="date"
                          min={new Date().toISOString().split("T")[0]}
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          className="rounded-xl"
                          data-ocid="booking.input"
                        />
                      </div>

                      <div>
                        <Label className="text-sm font-medium text-gray-700 mb-1.5 block">
                          <Clock size={14} className="inline mr-1" />
                          Select Time Slot
                        </Label>
                        <div className="grid grid-cols-3 gap-2">
                          {TIME_SLOTS.map((slot) => (
                            <button
                              type="button"
                              key={slot}
                              onClick={() => setTimeSlot(slot)}
                              className={`text-xs py-2 px-2 rounded-lg border font-medium transition-all ${
                                timeSlot === slot
                                  ? "border-pink-500 bg-pink-50 text-pink-700"
                                  : "border-gray-200 text-gray-600 hover:border-pink-300"
                              }`}
                              data-ocid="booking.select"
                            >
                              {slot}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <Label
                          htmlFor="address"
                          className="text-sm font-medium text-gray-700 mb-1.5 block"
                        >
                          <MapPin size={14} className="inline mr-1" />
                          Service Address
                        </Label>
                        <Input
                          id="address"
                          placeholder="Enter your complete address..."
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          className="rounded-xl"
                          data-ocid="booking.input"
                        />
                      </div>

                      <div className="bg-pink-50 rounded-xl p-4">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-600">Service Fee</span>
                          <span className="font-semibold">{service.price}</span>
                        </div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-600">Platform Fee</span>
                          <span className="font-semibold text-pink-600">
                            ₹25
                          </span>
                        </div>
                        <div className="border-t border-pink-200 pt-2 mt-2 flex justify-between">
                          <span className="font-bold text-gray-900">Total</span>
                          <span className="font-bold text-pink-700">
                            ₹
                            {Number.parseInt(service.price.replace("₹", "")) +
                              25}
                          </span>
                        </div>
                      </div>

                      <Button
                        onClick={handleBook}
                        disabled={isPending}
                        className="w-full rounded-full bg-violet-500 hover:bg-violet-600 text-white font-bold py-6 text-base"
                        data-ocid="booking.submit_button"
                      >
                        {isPending ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />{" "}
                            Booking...
                          </>
                        ) : !identity ? (
                          "Login to Book"
                        ) : (
                          "Confirm Booking"
                        )}
                      </Button>

                      {!identity && (
                        <p className="text-center text-xs text-gray-500">
                          <button
                            type="button"
                            onClick={onAuthOpen}
                            className="text-pink-600 font-semibold underline"
                            data-ocid="booking.link"
                          >
                            Login
                          </button>{" "}
                          or{" "}
                          <button
                            type="button"
                            onClick={onAuthOpen}
                            className="text-pink-600 font-semibold underline"
                            data-ocid="booking.link"
                          >
                            register
                          </button>{" "}
                          to complete booking
                        </p>
                      )}
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
