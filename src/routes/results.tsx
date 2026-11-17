import { createFileRoute } from "@tanstack/react-router";
import { ResultsPage } from "@/components/site-pages";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/results")({
  head: () => ({
    meta: pageMeta(
      "Results & Patient Stories | Dr. Rajeev's The Family Clinic",
      "Read verified patient experiences and recovery journeys across our clinic network.",
      "/results",
    ),
  }),
  component: ResultsPage,
});
