import { createFileRoute } from "@tanstack/react-router";
import { AppointmentsPage } from "@/components/site-pages";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/appointments")({
  head: () => ({
    meta: pageMeta(
      "Book Appointment | Dr. Rajeev's The Family Clinic",
      "Request an in-clinic OPD consultation with Dr. Rajeev in Ranchi, Patna, Kolkata, or Delhi.",
      "/appointments"
    ),
  }),
  component: AppointmentsPage,
});
