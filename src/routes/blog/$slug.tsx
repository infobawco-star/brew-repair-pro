import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { PageShell } from "../../components/site/PageShell";
import { BlogArticleBody } from "../../components/site/BlogArticle";
import { getPost, getPostsByLocale, articleJsonLd } from "../../lib/blog";
import { breadcrumbJsonLd, pageHead, SITE_URL } from "../../lib/seo";

export const Route = createFileRoute("/blog/$slug")({
  staticData: { sitemap: true },
  head: ({ params }) => {
    const post = getPost(params.slug, "ar");
    if (!post) {
      return pageHead({
        locale: "ar",
        arPath: "/blog",
        title: "المدونة — FixBar",
        description: "مقالات ونصائح لصيانة أجهزة القهوة.",
      });
    }
    return pageHead({
      locale: "ar",
      arPath: post.path,
      title: post.metaTitle,
      description: post.description,
      ogType: "article",
      jsonLd: [
        articleJsonLd(post, SITE_URL),
        breadcrumbJsonLd([
          { name: "الرئيسية", path: "/" },
          { name: "المدونة", path: "/blog" },
          { name: post.title, path: post.path },
        ]),
      ],
    });
  },
  component: BlogArticlePage,
});

function BlogArticlePage() {
  const { slug } = Route.useParams();
  const post = getPost(slug, "ar");

  if (!post) {
    return (
      <PageShell>
        <div className="mx-auto max-w-3xl px-5 py-32 text-center">
          <h1 className="text-3xl font-extrabold">المقال غير موجود</h1>
          <p className="mt-4 text-muted-foreground">لم نعثر على المقال المطلوب.</p>
          <Link
            to="/blog"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground"
          >
            <ArrowRight className="size-4" />
            العودة للمدونة
          </Link>
        </div>
      </PageShell>
    );
  }

  const related = getPostsByLocale("ar").filter((p) => p.slug !== post.slug);

  return (
    <PageShell>
      <article>
        <section className="relative overflow-hidden border-b border-border pt-32 pb-16">
          <div className="bg-grid absolute inset-0 opacity-50" aria-hidden />
          <div className="absolute -top-24 left-1/3 size-96 rounded-full bg-primary/12 blur-3xl" aria-hidden />
          <div className="relative mx-auto max-w-3xl px-5 md:px-8">
            <nav className="mb-5 flex items-center gap-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary">الرئيسية</Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-primary">المدونة</Link>
            </nav>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-primary/30 bg-primary/8 px-3 py-1 text-xs font-bold text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="mt-5 text-4xl leading-[1.15] font-extrabold md:text-5xl">
              {post.title}
            </h1>
            <div className="mt-5 flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Calendar className="size-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="size-4" />
                {post.readingMinutes} دقيقة قراءة
              </span>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
          <BlogArticleBody blocks={post.blocks} />

          <div className="mt-16 rounded-2xl border border-primary/25 bg-primary/5 p-8 text-center">
            <h2 className="text-2xl font-extrabold">تحتاج صيانة لجهاز iRhea أو معدات قهوة أخرى؟</h2>
            <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
              فريق FixBar الفني جاهز للفحص والصيانة وإصلاح الأعطال — أرسل طلبك اليوم.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-bold text-primary-foreground transition-transform hover:scale-105"
            >
              اطلب صيانة الآن
            </Link>
          </div>
        </section>

        {related.length > 0 && (
          <section className="border-t border-border bg-card/30">
            <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
              <h2 className="text-2xl font-extrabold">مقالات أخرى</h2>
              <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {related.map((r) => (
                  <Link
                    key={r.path}
                    to={r.path}
                    className="group rounded-2xl border border-border bg-card p-6 transition-all hover:card-glow"
                  >
                    <h3 className="text-lg font-bold transition-colors group-hover:text-primary">
                      {r.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {r.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </article>
    </PageShell>
  );
}
