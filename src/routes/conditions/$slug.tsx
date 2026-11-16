import { createFileRoute } from "@tanstack/react-router";
import { ConditionDetailPage } from "@/components/site-pages";
import { getCondition } from "@/data/conditions";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/conditions/$slug")({
  head: ({ params }) => {
    const condition = getCondition(params.slug);
    return {
      meta: pageMeta(
        condition ? `${condition.name} Care | Dr. Rajeev's Clinic` : "Condition Care",
        condition?.summary ?? "Clinical condition details.",
        `/conditions/${params.slug}`
      ),
    };
  },
  component: ConditionDetailRoute,
});

function ConditionDetailRoute() {
  const { slug } = Route.useParams();
  return <ConditionDetailPage slug={slug} />;
}
