import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Sparkles } from "lucide-react";
import { PageShell, PageHero } from "../components/site/PageShell";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "الباقات والأسعار — FixBar" },
      {
        name: "description",
        content:
          "باقات اشتراك شهرية وسنوية لصيانة أجهزة المقاهي: أساسية، احترافية، ومؤسسات — بأسعار واضحة بدون مفاجآت.",
      },
      { property: "og:title", content: "الباقات والأسعار — FixBar" },
      {
        property: "og:description",
        content:
          "باقات صيانة مرنة للمقاهي بأسعار واضحة: أساسية، احترافية، ومؤسسات.",
      },
    ],
  }),
  component: PricingPage,
});

const tiers = [
  {
    name: "أساسية",
    price: "999",
    unit: "ر.س / شهرياً",
    desc: "للمقاهي الناشئة بجهاز إسبريسو واحد.",
    features: [
      "زيارة صيانة دورية كل شهرين",
      "فحص ٢٥ نقطة شامل",
      "خصم ١٠٪ على قطع الغيار",
      "دعم هاتفي في ساعات العمل",
    ],
    featured: false,
  },
  {
    name: "احترافية",
    price: "1499",
    unit: "ر.س / شهرياً",
    desc: "للمقاهي العاملة بكامل طاقتها يومياً.",
    features: [
      "زيارة صيانة دورية شهرية",
      "إصلاح طارئ خلال ٢٤ ساعة",
      "جهاز بديل مؤقت عند الأعطال الكبرى",
      "خصم ٢٠٪ على قطع الغيار",
      "تقرير أداء شهري للأجهزة",
    ],
    featured: true,
  },
  {
    name: "مؤسسات",
    price: "حسب الطلب",
    unit: "عقد سنوي",
    desc: "لسلاسل المقاهي والفنادق والمشغلين الكبار.",
    features: [
      "جدول صيانة مخصص لكل فرع",
      "فني مخصص وخط ساخن مباشر",
      "قطع غيار ضمن العقد",
      "تقارير ولوحة متابعة مركزية",
      "تدريب باريستا على العناية اليومية",
    ],
    featured: false,
  },
];

function PricingPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="الباقات"
        title="أسعار واضحة، بدون مفاجآت"
        subtitle="اختر الباقة المناسبة لحجم مقهاك. جميع الباقات تشمل الفحص الدوري وتقارير الحالة، ويمكنك الترقية في أي وقت."
      />

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-6 lg:grid-cols-3">
          {tiers.map((t) => (
            <article
              key={t.name}
              className={`relative flex flex-col rounded-2xl border p-7 ${
                t.featured
                  ? "card-glow border-primary/50 bg-card"
                  : "border-border bg-card/60"
              }`}
            >
              {t.featured && (
                <span className="absolute -top-3.5 right-6 inline-flex items-center gap-1.5 rounded-full bg-primary px-3.5 py-1 text-xs font-bold text-primary-foreground">
                  <Sparkles className="size-3.5" />
                  الأكثر طلباً
                </span>
              )}
              <h2 className="text-lg font-bold">{t.name}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{t.desc}</p>
              <div className="mt-5 flex items-baseline gap-2">
                <span
                  className={`text-4xl font-extrabold ${
                    t.featured ? "text-primary" : "text-foreground"
                  }`}
                >
                  {t.price}
                </span>
                <span className="text-sm text-muted-foreground">{t.unit}</span>
              </div>
              <ul className="mt-6 flex-1 space-y-3 border-t border-border pt-6">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`mt-7 rounded-full py-3 text-center text-sm font-bold transition-transform hover:scale-[1.03] ${
                  t.featured
                    ? "bg-primary text-primary-foreground"
                    : "border border-border bg-secondary text-secondary-foreground"
                }`}
              >
                ابدأ بهذه الباقة
              </Link>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          جميع الأسعار غير شاملة ضريبة القيمة المضافة. تحتاج باقة مخصصة؟{" "}
          <Link to="/contact" className="font-bold text-primary hover:underline">
            تواصل معنا
          </Link>
        </p>
      </section>
    </PageShell>
  );
}
