import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Wrench,
  CalendarCheck,
  Cog,
  Gauge,
  Droplets,
  ShieldCheck,
} from "lucide-react";
import { PageShell, PageHero } from "../components/site/PageShell";
import serviceRepair from "../assets/service-repair.jpg";
import serviceMaintenance from "../assets/service-maintenance.jpg";
import serviceParts from "../assets/service-parts.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "خدمات الصيانة — FixBar" },
      {
        name: "description",
        content:
          "صيانة دورية، إصلاح أعطال طارئة، وتوريد قطع غيار أصلية لأجهزة الإسبريسو والمطاحن في المقاهي.",
      },
      { property: "og:title", content: "خدمات الصيانة — FixBar" },
      {
        property: "og:description",
        content:
          "صيانة دورية، إصلاح أعطال طارئة، وقطع غيار أصلية لأجهزة القهوة الاحترافية.",
      },
    ],
  }),
  component: ServicesPage,
});

const coreServices = [
  {
    icon: CalendarCheck,
    image: serviceMaintenance,
    title: "الصيانة الدورية الوقائية",
    desc: "زيارات مجدولة لفحص الضغط ودرجة الحرارة، تنظيف عميق للمجموعات، واستبدال الجوانات والفلاتر قبل أن تتعطل أجهزتك.",
    points: ["فحص شامل ٢٥ نقطة", "تنظيف عميق بالمواد المعتمدة", "تقرير حالة بعد كل زيارة"],
  },
  {
    icon: Wrench,
    image: serviceRepair,
    title: "إصلاح الأعطال الطارئة",
    desc: "استجابة سريعة عند توقف جهاز الإسبريسو أو المطحنة — تشخيص دقيق وإصلاح في الموقع متى أمكن، مع جهاز بديل عند الحاجة.",
    points: ["استجابة خلال ٢٤ ساعة", "تشخيص مجاني للمشتركين", "جهاز بديل مؤقت"],
  },
  {
    icon: Cog,
    image: serviceParts,
    title: "قطع الغيار الأصلية",
    desc: "نوفر قطع غيار أصلية لمعظم العلامات: لا مارتزوكو، سيمونيلي، فيكتوريا أردوينو، مالكونيق وغيرها — مع ضمان تركيب.",
    points: ["مخزون جاهز للقطع الشائعة", "ضمان على التركيب", "طلبات خاصة للقطع النادرة"],
  },
];

const capabilities = [
  { icon: Gauge, title: "معايرة الضغط والحرارة", desc: "ضبط دقيق يعيد ثبات الاستخلاص." },
  { icon: Droplets, title: "معالجة تسريبات المياه", desc: "إصلاح التسريب وحماية الدوائر." },
  { icon: ShieldCheck, title: "فحص السلامة الكهربائية", desc: "اختبار الغلايات والمضخات." },
  { icon: Cog, title: "معايرة المطاحن", desc: "ضبط درجة الطحن والجرعة." },
];

function ServicesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="خدماتنا"
        title="كل ما تحتاجه أجهزة مقهاك في مكان واحد"
        subtitle="من الصيانة الوقائية المجدولة إلى الإصلاح الطارئ وقطع الغيار الأصلية — نغطي دورة حياة أجهزتك بالكامل."
      />

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-6 lg:grid-cols-3">
          {coreServices.map((s) => (
            <article
              key={s.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:card-glow"
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
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/30">
                    <s.icon className="size-5" />
                  </span>
                  <h2 className="text-xl font-bold">{s.title}</h2>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
                <ul className="mt-4 space-y-2 border-t border-border pt-4">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm">
                      <span className="size-1.5 rounded-full bg-primary" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-card/30">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <h2 className="text-3xl font-extrabold md:text-4xl">قدرات فنية إضافية</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((c) => (
              <div
                key={c.title}
                className="rounded-xl border border-border bg-background/60 p-5 transition-colors hover:border-primary/40"
              >
                <c.icon className="size-6 text-primary" />
                <h3 className="mt-3 font-bold">{c.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-col items-start justify-between gap-6 rounded-2xl border border-primary/25 bg-primary/5 p-8 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-extrabold">جهازك متعطل الآن؟</h2>
              <p className="mt-1 text-muted-foreground">
                أرسل طلبك وسيتواصل معك فني خلال ساعات العمل.
              </p>
            </div>
            <Link
              to="/contact"
              className="rounded-full bg-primary px-7 py-3 text-sm font-bold text-primary-foreground transition-transform hover:scale-105"
            >
              اطلب صيانة الآن
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
