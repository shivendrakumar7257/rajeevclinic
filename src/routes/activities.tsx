import { createFileRoute } from "@tanstack/react-router";
import { ActivitiesPage } from "@/components/site-pages";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/activities")({
  head: () => ({
    meta: pageMeta(
      "Activities, News, Events & Awards | Dr. Rajeev's The Family Clinic",
      "Discover Dr. Rajeev Kumar's community health camps, media press coverage, healthcare awards, gallery images, and philanthropic seva drives.",
      "/activities"
    ),
  }),
  component: ActivitiesPage,
});
