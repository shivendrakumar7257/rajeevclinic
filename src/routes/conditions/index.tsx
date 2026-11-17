import { createFileRoute } from "@tanstack/react-router";
import { ConditionsPage } from "@/components/site-pages";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/conditions/")({
  head: () => ({
    meta: pageMeta(
      "Conditions A–Z | Dr. Rajeev's The Family Clinic",
      "Browse our comprehensive A–Z clinical directory for common health concerns, allergies, skin diseases, and chronic disorders.",
      "/conditions",
    ),
  }),
  component: ConditionsPage,
});
