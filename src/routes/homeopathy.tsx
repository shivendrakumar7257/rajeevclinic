import { createFileRoute } from "@tanstack/react-router";
import { HomeopathyPage } from "@/components/site-pages";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/homeopathy")({
  head: () => ({
    meta: pageMeta(
      "Understanding Homeopathy | Dr. Rajeev's The Family Clinic",
      "Principles, scientific context, and how individualized homeopathic care works alongside modern medicine.",
      "/homeopathy",
    ),
  }),
  component: HomeopathyPage,
});
