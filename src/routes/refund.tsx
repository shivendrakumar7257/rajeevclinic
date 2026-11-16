import { createFileRoute } from "@tanstack/react-router";
import { PolicyPage } from "@/components/site-pages";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/refund")({
  head: () => ({
    meta: pageMeta(
      "Cancellation & Refund Policy | Dr. Rajeev's The Family Clinic",
      "Policy details regarding appointment changes, cancellations, and dispensary orders.",
      "/refund"
    ),
  }),
  component: () => <PolicyPage type="refund" />,
});
