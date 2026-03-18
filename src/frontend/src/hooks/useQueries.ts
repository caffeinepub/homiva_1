import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { Booking, Review } from "../backend.d";
import { useActor } from "./useActor";

export function useMyBookings() {
  const { actor, isFetching } = useActor();
  return useQuery<Booking[]>({
    queryKey: ["myBookings"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getBookingsByCaller();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useCreateBooking() {
  const { actor } = useActor();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({
      serviceId,
      date,
      address,
    }: { serviceId: bigint; date: bigint; address: string }) => {
      if (!actor) throw new Error("Not connected");
      return actor.createBooking(serviceId, date, address);
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["myBookings"] });
    },
  });
}

export function useCancelBooking() {
  const { actor } = useActor();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (id: bigint) => {
      if (!actor) throw new Error("Not connected");
      return actor.cancelBooking(id);
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["myBookings"] });
    },
  });
}

export function useAllReviews() {
  const { actor, isFetching } = useActor();
  return useQuery<Review[]>({
    queryKey: ["allReviews"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllReviews();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSubmitReview() {
  const { actor } = useActor();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({
      serviceId,
      rating,
      comment,
    }: { serviceId: bigint; rating: bigint; comment: string }) => {
      if (!actor) throw new Error("Not connected");
      return actor.submitReview(serviceId, rating, comment);
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["allReviews"] });
    },
  });
}
