import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { AlertCircle, CalendarDays, Loader2, MapPin, X } from "lucide-react";
import { motion } from "motion/react";
import { toast } from "sonner";
import type { NavState } from "../App";
import { BookingStatus } from "../backend.d";
import { SERVICES } from "../data/services";
import { useInternetIdentity } from "../hooks/useInternetIdentity";
import { useCancelBooking, useMyBookings } from "../hooks/useQueries";

interface MyBookingsPageProps {
  navigate: (state: NavState) => void;
  onAuthOpen: () => void;
}

function getServiceName(id: bigint) {
  const svc = SERVICES.find((s) => s.backendId === id);
  return svc ? `${svc.icon} ${svc.title}` : `Service #${id}`;
}

function statusColor(status: BookingStatus) {
  switch (status) {
    case BookingStatus.confirmed:
      return "bg-secondary text-secondary-foreground border-secondary";
    case BookingStatus.pending:
      return "bg-yellow-100 text-yellow-700 border-yellow-200";
    case BookingStatus.cancelled:
      return "bg-gray-100 text-gray-500 border-gray-200";
    default:
      return "bg-gray-100 text-gray-500";
  }
}

export default function MyBookingsPage({
  navigate,
  onAuthOpen,
}: MyBookingsPageProps) {
  const { identity } = useInternetIdentity();
  const { data: bookings, isLoading, isError } = useMyBookings();
  const { mutateAsync: cancelBooking, isPending: isCancelling } =
    useCancelBooking();

  const handleCancel = async (id: bigint) => {
    try {
      await cancelBooking(id);
      toast.success("Booking cancelled successfully.");
    } catch {
      toast.error("Failed to cancel booking.");
    }
  };

  if (!identity) {
    return (
      <div className="max-w-lg mx-auto px-4 py-20 text-center">
        <div className="text-6xl mb-4">🔐</div>
        <h2 className="text-2xl font-bold mb-2" style={{ color: "#4b2e83" }}>
          Login to View Bookings
        </h2>
        <p className="text-gray-500 mb-6">
          Please log in to access your booking history and manage your services.
        </p>
        <Button
          onClick={onAuthOpen}
          className="rounded-full text-white font-semibold px-8 border-0"
          style={{ background: "linear-gradient(135deg, #ff4da6, #6a5acd)" }}
          data-ocid="bookings.primary_button"
        >
          Login / Register
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-2xl font-bold mb-1" style={{ color: "#4b2e83" }}>
          My Bookings
        </h1>
        <p className="text-gray-500 text-sm mb-6">
          Manage your upcoming and past services
        </p>
      </motion.div>

      {isLoading && (
        <div className="space-y-4" data-ocid="bookings.loading_state">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="border-0 shadow-card rounded-2xl">
              <CardContent className="p-5">
                <Skeleton className="h-5 w-2/3 mb-2" />
                <Skeleton className="h-4 w-1/2 mb-2" />
                <Skeleton className="h-4 w-1/3" />
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {isError && (
        <Card
          className="border-0 shadow-card rounded-2xl"
          data-ocid="bookings.error_state"
        >
          <CardContent className="p-8 text-center">
            <AlertCircle className="text-red-400 mx-auto mb-3" size={40} />
            <h3 className="font-bold text-gray-900 mb-1">
              Failed to Load Bookings
            </h3>
            <p className="text-sm text-gray-500">Please try again later.</p>
          </CardContent>
        </Card>
      )}

      {!isLoading && !isError && (!bookings || bookings.length === 0) && (
        <Card
          className="border-0 shadow-card rounded-2xl"
          data-ocid="bookings.empty_state"
        >
          <CardContent className="p-12 text-center">
            <div className="text-5xl mb-4">📋</div>
            <h3 className="text-xl font-bold mb-2" style={{ color: "#4b2e83" }}>
              No Bookings Yet
            </h3>
            <p className="text-gray-500 text-sm mb-6">
              Book a service to get started. We'll be there in 15–20 minutes!
            </p>
            <Button
              onClick={() =>
                navigate({ page: "service", serviceId: "elderly" })
              }
              className="rounded-full text-white font-semibold border-0"
              style={{
                background: "linear-gradient(135deg, #ff4da6, #6a5acd)",
              }}
              data-ocid="bookings.primary_button"
            >
              Book a Service
            </Button>
          </CardContent>
        </Card>
      )}

      <div className="space-y-4">
        {bookings?.map((booking, i) => (
          <motion.div
            key={booking.id.toString()}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            data-ocid={`bookings.item.${i + 1}`}
          >
            <Card
              className="border-0 shadow-card rounded-2xl overflow-hidden"
              style={{ background: "white" }}
            >
              <div
                className="h-1"
                style={{
                  background: "linear-gradient(90deg, #ff4da6, #6a5acd)",
                }}
              />
              <CardContent className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-bold text-gray-900">
                      {getServiceName(booking.serviceId)}
                    </h3>
                    <div className="flex items-center gap-1 text-sm text-gray-500 mt-0.5">
                      <CalendarDays size={13} />
                      <span>
                        {new Date(Number(booking.date)).toLocaleDateString(
                          "en-IN",
                          {
                            weekday: "short",
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          },
                        )}
                      </span>
                    </div>
                  </div>
                  <Badge
                    className={`border rounded-full text-xs font-semibold capitalize ${statusColor(booking.status)}`}
                  >
                    {booking.status}
                  </Badge>
                </div>

                <div className="flex items-start gap-1.5 text-sm text-gray-600">
                  <MapPin
                    size={13}
                    className="mt-0.5 shrink-0"
                    style={{ color: "#ff4da6" }}
                  />
                  <span className="line-clamp-2">{booking.address}</span>
                </div>

                {booking.status === BookingStatus.pending && (
                  <div className="mt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-full border-red-200 text-red-500 hover:bg-red-50 text-xs"
                      onClick={() => handleCancel(booking.id)}
                      disabled={isCancelling}
                      data-ocid={`bookings.item.${i + 1}.delete_button`}
                    >
                      {isCancelling ? (
                        <Loader2 className="mr-1 h-3 w-3 animate-spin" />
                      ) : (
                        <X size={12} className="mr-1" />
                      )}
                      Cancel Booking
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
