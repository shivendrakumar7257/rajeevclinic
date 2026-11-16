import { createFileRoute } from "@tanstack/react-router";
import { BlogDetailPage } from "@/components/site-pages";
import { posts } from "@/data/content";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug);
    return {
      meta: pageMeta(
        post ? `${post.title} | Dr. Rajeev's Clinic` : "Clinic Update",
        post?.summary ?? "Clinical update details.",
        `/blog/${params.slug}`
      ),
    };
  },
  component: BlogDetailRoute,
});

function BlogDetailRoute() {
  const { slug } = Route.useParams();
  return <BlogDetailPage slug={slug} />;
}
