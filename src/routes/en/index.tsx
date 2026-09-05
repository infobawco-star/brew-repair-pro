import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CalendarCheck, Clock, Cog, FileCheck, ShieldCheck, Wrench } from "lucide-react";
import { PageShell } from "../../components/site/PageShell";
import heroMachine from "../../assets/hero-machine.jpg";
import serviceRepair from "../../assets/service-repair.jpg";
import serviceMaintenance from "../../assets/service-maintenance.jpg";
import serviceParts from "../../assets/service-parts.jpg";
import { businessJsonLd, pageHead } from "../../lib/seo";

export const Route = createFileRoute("/en/")({
  staticData: { sitemap: true },
  head: () =>
    pageHead({
      locale: "en",
      arPath: "/",
      title: "FixBar | Café Equipment Maintenance in Saudi Arabia",
      description:
        "Professional espresso machine and grinder maintenance, 24-hour repair response, and genuine spare parts for cafés across Saudi Arabia.",
      jsonLd: [businessJsonLd("en")],
    }),
  component: EnglishHomePage,
});

const services = [
  { icon: CalendarCheck, image: serviceMaintenance, title: "Preventive maintenance", desc: "Scheduled visits that prevent breakdowns and keep extraction consistent." },
  { icon: Wrench, image: serviceRepair, title: "Emergency repairs", desc: "Response within 24 hours, with temporary replacement equipment when needed." },
  { icon: Cog, image: serviceParts, title: "Genuine spare parts", desc: "Ready stock for leading brands, backed by an installation warranty." },
];
const stats = [
  { icon: Clock, value: "24 hrs", label: "Breakdown response time" },
  { icon: ShieldCheck, value: "25 points", label: "Inspected at every visit" },
  { icon: FileCheck, value: "100%", label: "Written service reports" },
];

function EnglishHomePage() {
  return <PageShell locale="en">
    <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="bg-grid absolute inset-0 opacity-60" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-2">
        <div className="animate-rise-in min-w-0">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/8 px-4 py-1.5 text-xs font-bold text-primary"><span className="size-1.5 animate-pulse rounded-full bg-primary" />Certified technicians — coverage across Saudi Arabia</span>
          <h1 className="mt-6 text-5xl leading-[1.08] font-black md:text-7xl">Your equipment runs.<br/><span className="text-primary text-glow">Your café never stops.</span></h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">Preventive maintenance and rapid repairs for espresso machines and grinders — before downtime costs you customers.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/en/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-bold text-primary-foreground">Request service <ArrowRight className="size-4" /></Link>
            <Link to="/en/pricing" className="rounded-full border border-border px-8 py-3.5 text-sm font-medium">View plans</Link>
          </div>
        </div>
        <div className="card-glow overflow-hidden rounded-2xl border border-primary/25"><img src={heroMachine} alt="Technician inspecting a professional espresso machine" width={1280} height={960} className="size-full object-cover" /></div>
      </div>
    </section>
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
      <span className="text-xs font-bold text-primary">OUR SERVICES</span><h2 className="mt-2 text-3xl font-extrabold md:text-5xl">Maintenance, managed professionally</h2>
      <div className="mt-10 grid gap-6 md:grid-cols-3">{services.map(s => <article key={s.title} className="group overflow-hidden rounded-2xl border border-border bg-card"><div className="aspect-[4/3] overflow-hidden"><img src={s.image} alt={s.title} loading="lazy" className="size-full object-cover transition-transform duration-500 group-hover:scale-105" /></div><div className="p-6"><s.icon className="size-6 text-primary"/><h3 className="mt-3 text-lg font-bold">{s.title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p></div></article>)}</div>
    </section>
    <section className="border-y border-border bg-card/30"><div className="mx-auto grid max-w-7xl gap-6 px-5 py-14 sm:grid-cols-3 md:px-8">{stats.map(s => <div key={s.label} className="flex items-center gap-4"><span className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"><s.icon className="size-6"/></span><div><p className="text-3xl font-black text-primary">{s.value}</p><p className="mt-1 text-sm text-muted-foreground">{s.label}</p></div></div>)}</div></section>
    <section className="mx-auto max-w-7xl px-5 py-20 text-center md:px-8"><h2 className="text-4xl font-black md:text-6xl">Leave equipment downtime <span className="text-primary text-glow">to us</span></h2><p className="mx-auto mt-4 max-w-xl text-muted-foreground">Send your request today and get your first diagnostic inspection free with any maintenance plan.</p><Link to="/en/contact" className="mt-8 inline-flex rounded-full bg-primary px-10 py-4 font-bold text-primary-foreground">Request service now</Link></section>
  </PageShell>;
}
