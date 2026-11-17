import { createFileRoute } from "@tanstack/react-router";
import { AutismBookPage } from "@/components/site-pages";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/autism-book")({
  head: () => ({
    meta: pageMeta(
      "Autism Care Guidance Book | Dr. Rajeev's The Family Clinic",
      "Comprehensive educational book on pediatric autism and sensory support by Dr. Rajeev.",
      "/autism-book",
    ),
  }),
  component: AutismBookPage,
});
