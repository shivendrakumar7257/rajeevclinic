import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/site-pages";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: pageMeta(
      "About Us | Dr. Rajeev's The Family Clinic",
      "Learn about Dr. Rajeev's clinical background, our mission, ABHI HOMEO HALL, and 15+ years of healthcare excellence.",
      "/about",
    ),
  }),
  component: AboutPage,
});
