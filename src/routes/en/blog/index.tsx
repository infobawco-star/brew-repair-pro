import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { PageShell, PageHero } from "../../../components/site/PageShell";
import { getPostsByLocale } from "../../../lib/blog";
import { breadcrumbJsonLd, pageHead } from "../../../lib/seo";

export const Route = createFileRoute("/en/blog/")({
  staticData: { sitemap: true },
  head: () =>
    pageHead({
      locale: "en",
      arPath: "/blog",
      title: "FixBar Blog — Coffee Equipment Tips & Maintenance",
      description:
        "Specialized articles on coffee equipment maintenance and repair for cafés: comprehensive guides for iRhea and other machines, operating tips, and the importance of regular servicing.",
      ogType: "website",
      jsonLd: [breadcrumbJsonLd([{ name: "Home", path: "/en" }, { name: "Blog", path: "/en/blog" }])],
    }),
  component: EnglishBlogIndexPage,
});

function EnglishBlogIndexPage() {
  const posts = getPostsByLocale("en");
  return (
    <PageShell locale="en">
      <PageHero
        locale="en"
        eyebrow="BLOG"
        title="Coffee equipment tips and maintenance"
        subtitle="Practical, specialized guides that help café owners understand their equipment, avoid problems, and keep operations running."
      />

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.path}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:card-glow"
            >
              <Link to={post.path} className="flex flex-1 flex-col p-6">
                <div className="flex flex-wrap gap-2">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-primary/30 bg-primary/8 px-3 py-1 text-xs font-bold text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="mt-4 text-xl font-extrabold leading-snug text-foreground transition-colors group-hover:text-primary">
                  {post.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
                <div className="mt-5 flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="size-3.5" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="size-3.5" />
                    {post.readingMinutes} min read
                  </span>
                </div>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary">
                  Read article
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
