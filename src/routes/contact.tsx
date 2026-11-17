import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/site-pages";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: pageMeta(
      "Contact Us & Locations | Dr. Rajeev's The Family Clinic",
      "Get phone numbers, OPD clinic addresses in Ranchi, Patna, Kolkata, and Delhi, and email support.",
      "/contact",
    ),
  }),
  component: ContactPage,
});
