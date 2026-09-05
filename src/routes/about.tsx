import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "../components/site/PageShell";
import serviceRepair from "../assets/service-repair.jpg";
import { breadcrumbJsonLd, pageHead } from "../lib/seo";

export const Route = createFileRoute("/about")({
  staticData: { sitemap: true },
  head: () =>
    pageHead({
      locale: "ar",
      arPath: "/about",
      title: "من نحن — فريق FixBar لصيانة أجهزة القهوة",
      description:
        "فريق فني سعودي متخصص في صيانة أجهزة الإسبريسو والمطاحن للمقاهي — دقة، سرعة استجابة، وتقارير شفافة بعد كل زيارة.",
      jsonLd: [breadcrumbJsonLd([{ name: "الرئيسية", path: "/" }, { name: "من نحن", path: "/about" }])],
    }),
  component: AboutPage,
});

const values = [
  {
    title: "دقة المهندس، حس الباريستا",
    desc: "نفهم الجهاز كقطعة هندسية، ونفهم ما يعنيه توقفه لكوب قهوتك وتجربة عميلك.",
  },
  {
    title: "شفافية كاملة",
    desc: "تقرير مكتوب بعد كل زيارة: ماذا فحصنا، ماذا بدّلنا، وما الذي يحتاج انتباهك قريباً.",
  },
  {
    title: "وقتك أغلى من جهازك",
    desc: "التزام بمواعيد الاستجابة، وجهاز بديل مؤقت حتى لا يتوقف البيع في مقهاك.",
  },
];

function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="من نحن"
        title="فريق يعشق القهوة ويفهم أجهزتها"
        subtitle="بدأنا FixBar لأننا رأينا مقاهي تخسر عملاءها بسبب أعطال كان يمكن منعها. اليوم نخدم مقاهي في أنحاء المملكة بعقود صيانة واستجابة طارئة."
      />

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-border">
            <img
              src={serviceRepair}
              alt="فني FixBar يعاير جهاز إسبريسو"
              loading="lazy"
              width={960}
              height={720}
              className="size-full object-cover"
            />
          </div>
          <div className="space-y-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-xl border border-border bg-card/60 p-6"
              >
                <h2 className="text-lg font-bold text-primary">{v.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-2xl border border-primary/25 bg-primary/5 p-8 text-center">
          <h2 className="text-2xl font-extrabold">جاهز نهتم بأجهزتك؟</h2>
          <p className="mx-auto mt-2 max-w-xl text-muted-foreground">
            أرسل طلب صيانة أو استفسر عن الباقات — الرد خلال ساعات العمل.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex rounded-full bg-primary px-8 py-3 text-sm font-bold text-primary-foreground transition-transform hover:scale-105"
          >
            اطلب خدمة
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
