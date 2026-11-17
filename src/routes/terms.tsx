import { createFileRoute } from "@tanstack/react-router";
import { PolicyPage } from "@/components/site-pages";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: pageMeta(
      "Terms of Use | Dr. Rajeev's The Family Clinic",
      "Terms and conditions for using Dr. Rajeev's clinic website and appointment services.",
      "/terms",
    ),
  }),
  component: () => <PolicyPage type="terms" />,
});
