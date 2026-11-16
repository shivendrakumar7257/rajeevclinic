import { createFileRoute } from "@tanstack/react-router";
import { SheChildCarePage } from "@/components/site-pages";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/she-child-care")({
  head: () => ({
    meta: pageMeta(
      "She & Child Care | Dr. Rajeev's The Family Clinic",
      "Specialized women's hormonal health, menstrual care, and gentle pediatric holistic wellness.",
      "/she-child-care"
    ),
  }),
  component: SheChildCarePage,
});
