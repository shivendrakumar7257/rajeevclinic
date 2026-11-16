import { createFileRoute } from "@tanstack/react-router";
import { BlogPage } from "@/components/site-pages";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: pageMeta(
      "Health Blog & Clinic Updates | Dr. Rajeev's The Family Clinic",
      "Read the latest healthcare guidance, preparation tips, and clinic notices from Dr. Rajeev.",
      "/blog"
    ),
  }),
  component: BlogPage,
});
