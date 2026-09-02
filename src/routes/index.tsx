import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Wrench,
  CalendarCheck,
  Cog,
  ArrowLeft,
  ShieldCheck,
  Clock,
  FileCheck,
} from "lucide-react";
import { PageShell } from "../components/site/PageShell";
import heroMachine from "../assets/hero-machine.jpg";
import serviceRepair from "../assets/service-repair.jpg";
import serviceMaintenance from "../assets/service-maintenance.jpg";
import serviceParts from "../assets/service-parts.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FixBar | صيانة أجهزة المقاهي" },
      {
        name: "description",
        content:
          "FixBar — صيانة وإصلاح أجهزة الإسبريسو والمطاحن للمقاهي. صيانة دورية، إصلاح أعطال، وقطع غيار أصلية بباقات اشتراك مرنة.",
      },
      { property: "og:title", content: "FixBar | صيانة أجهزة المقاهي" },
      {
        property: "og:description",
        content:
          "صيانة دورية وإصلاح فوري لأجهزة القهوة في مقهاك — بفنيين معتمدين وقطع غيار أصلية.",
      },
    ],
  }),
  component: HomePage,
});

const brands = [
  "LA MARZOCCO",
  "NUOVA SIMONELLI",
  "VICTORIA ARDUINO",
  "MAHLKÖNIG",
  "ROCKET",
  "SYNESSO",
  "FAEMA",
  "SANREMO",
];

const services = [
  {
    icon: CalendarCheck,
    image: serviceMaintenance,
    title: "الصيانة الدورية",
    desc: "زيارات مجدولة تمنع الأعطال قبل حدوثها وتُبقي الاستخلاص ثابتاً.",
  },
  {
    icon: Wrench,
    image: serviceRepair,
    title: "إصلاح الأعطال",
    desc: "استجابة خلال ٢٤ ساعة مع جهاز بديل مؤقت حتى لا يتوقف البيع.",
  },
  {
    icon: Cog,
    image: serviceParts,
    title: "قطع غيار أصلية",
    desc: "مخزون جاهز لأشهر العلامات مع ضمان على التركيب.",
  },
];

const stats = [
  { icon: Clock, value: "٢٤ ساعة", label: "زمن الاستجابة للأعطال" },
  { icon: ShieldCheck, value: "٢٥ نقطة", label: "فحص شامل كل زيارة" },
  { icon: FileCheck, value: "١٠٠٪", label: "تقارير مكتوبة بعد كل صيانة" },
];

const tiers = [
  { name: "أساسية", price: "٤٩٩", unit: "ر.س / شهرياً" },
  { name: "احترافية", price: "٨٩٩", unit: "ر.س / شهرياً", featured: true },
  { name: "مؤسسات", price: "حسب الطلب", unit: "عقد سنوي" },
];

function HomePage() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="bg-grid absolute inset-0 opacity-60" aria-hidden />
        <div
          className="animate-pulse-slow absolute -top-32 left-1/4 size-[28rem] rounded-full bg-primary/14 blur-3xl"
          aria-hidden
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-2">
          <div className="animate-rise-in">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/8 px-4 py-1.5 text-xs font-bold text-primary">
              <span className="size-1.5 animate-pulse rounded-full bg-primary" />
              فريق فني معتمد — تغطية لجميع مناطق المملكة
            </span>
            <h1 className="mt-6 text-5xl leading-[1.08] font-black tracking-tight md:text-7xl">
              جهازك شغّال،
              <br />
              <span className="text-primary text-glow">مقهاك ما يوقف.</span>
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
              صيانة دورية وإصلاح فوري لأجهزة الإسبريسو والمطاحن — نمنع الأعطال
              قبل أن تكلفك عملاءك.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-bold text-primary-foreground transition-transform hover:scale-105"
              >
                اطلب صيانة الآن
                <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
              </Link>
              <Link
                to="/pricing"
                className="rounded-full border border-border px-8 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                استعرض الباقات
              </Link>
            </div>
          </div>

          <div
            className="animate-rise-in relative"
            style={{ animationDelay: "150ms" }}
          >
            <div className="card-glow overflow-hidden rounded-2xl border border-primary/25">
              <img
                src={heroMachine}
                alt="فني يفحص آلة إسبريسو احترافية بإضاءة خضراء"
                width={1280}
                height={960}
                fetchPriority="high"
                className="size-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Brands marquee */}
      <section className="overflow-hidden border-y border-border bg-card/40 py-5">
        <p className="mb-4 text-center text-xs font-bold tracking-widest text-muted-foreground">
          نخدم أجهزة أشهر العلامات العالمية
        </p>
        <div className="animate-marquee-rtl flex w-max gap-12">
          {[...brands, ...brands].map((b, i) => (
            <span
              key={`${b}-${i}`}
              className="text-sm font-black tracking-[0.25em] text-muted-foreground/70"
              dir="ltr"
            >
              {b}
            </span>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold tracking-widest text-primary">
              خدماتنا
            </span>
            <h2 className="mt-2 text-3xl font-extrabold md:text-5xl">
              صيانة تُدار باحتراف
            </h2>
          </div>
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 text-sm font-bold text-primary"
          >
            كل الخدمات
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:card-glow"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  width={960}
                  height={720}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/30">
                    <s.icon className="size-5" />
                  </span>
                  <h3 className="text-lg font-bold">{s.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-card/30">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-14 sm:grid-cols-3 md:px-8">
          {stats.map((s) => (
            <div key={s.label} className="flex items-center gap-4">
              <span className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/30">
                <s.icon className="size-6" />
              </span>
              <div>
                <p className="text-3xl font-black text-primary">{s.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing teaser */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold tracking-widest text-primary">
              الباقات
            </span>
            <h2 className="mt-2 text-3xl font-extrabold md:text-5xl">
              باقة تناسب حجم مقهاك
            </h2>
          </div>
          <Link
            to="/pricing"
            className="group inline-flex items-center gap-2 text-sm font-bold text-primary"
          >
            تفاصيل الباقات
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <article
              key={t.name}
              className={`rounded-2xl border p-7 text-center ${
                t.featured
                  ? "card-glow border-primary/50 bg-card"
                  : "border-border bg-card/60"
              }`}
            >
              <h3 className="font-bold">{t.name}</h3>
              <p
                className={`mt-3 text-4xl font-black ${
                  t.featured ? "text-primary" : "text-foreground"
                }`}
              >
                {t.price}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{t.unit}</p>
              <Link
                to="/contact"
                className={`mt-6 inline-flex w-full justify-center rounded-full py-3 text-sm font-bold transition-transform hover:scale-[1.03] ${
                  t.featured
                    ? "bg-primary text-primary-foreground"
                    : "border border-border bg-secondary text-secondary-foreground"
                }`}
              >
                اختر الباقة
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden border-t border-border">
        <div className="bg-grid absolute inset-0 opacity-40" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-5 py-20 text-center md:px-8 md:py-28">
          <h2 className="text-4xl font-black md:text-6xl">
            خلّ أعطال الأجهزة
            <span className="text-primary text-glow"> همّنا مو همّك</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            أرسل طلبك اليوم وخذ أول فحص تشخيصي مجاناً مع أي باقة اشتراك.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-10 py-4 text-base font-bold text-primary-foreground transition-transform hover:scale-105"
          >
            اطلب خدمة الآن
            <ArrowLeft className="size-5" />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
