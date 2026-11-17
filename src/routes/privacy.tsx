import { createFileRoute } from "@tanstack/react-router";
import { PolicyPage } from "@/components/site-pages";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: pageMeta(
      "Privacy Policy | Dr. Rajeev's The Family Clinic",
      "How Dr. Rajeev's clinic protects your personal information and clinical records.",
      "/privacy",
    ),
  }),
  component: () => <PolicyPage type="privacy" />,
});
