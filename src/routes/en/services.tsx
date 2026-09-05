import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarCheck, Cog, Droplets, Gauge, ShieldCheck, Wrench } from "lucide-react";
import { PageHero, PageShell } from "../../components/site/PageShell";
import serviceRepair from "../../assets/service-repair.jpg";
import serviceMaintenance from "../../assets/service-maintenance.jpg";
import serviceParts from "../../assets/service-parts.jpg";
import { breadcrumbJsonLd, pageHead } from "../../lib/seo";
export const Route = createFileRoute("/en/services")({
  staticData: { sitemap: true },
  head: () =>
    pageHead({
      locale: "en",
      arPath: "/services",
      title: "Café Equipment Maintenance Services — FixBar",
      description:
        "Preventive maintenance, emergency repairs, and genuine spare parts for professional espresso machines and grinders in Saudi Arabia.",
      jsonLd: [breadcrumbJsonLd([{ name: "Home", path: "/en" }, { name: "Services", path: "/en/services" }])],
    }),
  component: Services });
const items=[
 {icon:CalendarCheck,image:serviceMaintenance,title:"Preventive maintenance",desc:"Scheduled pressure and temperature checks, deep group cleaning, and proactive replacement of seals and filters.",points:["25-point inspection","Certified deep cleaning","Report after every visit"]},
 {icon:Wrench,image:serviceRepair,title:"Emergency repairs",desc:"Fast diagnosis and on-site repair whenever possible, with temporary replacement equipment when needed.",points:["Response within 24 hours","Free diagnosis for subscribers","Temporary replacement equipment"]},
 {icon:Cog,image:serviceParts,title:"Genuine spare parts",desc:"Original parts for La Marzocco, Nuova Simonelli, Victoria Arduino, Mahlkönig and other leading brands.",points:["Common parts in stock","Installation warranty","Special orders available"]},
];
const capabilities=[{icon:Gauge,title:"Pressure & temperature calibration",desc:"Precision tuning for consistent extraction."},{icon:Droplets,title:"Leak repair",desc:"Resolve leaks and protect internal circuits."},{icon:ShieldCheck,title:"Electrical safety checks",desc:"Testing boilers, pumps, and controls."},{icon:Cog,title:"Grinder calibration",desc:"Accurate grind and dose adjustment."}];
function Services(){return <PageShell locale="en"><PageHero locale="en" eyebrow="OUR SERVICES" title="Everything your café equipment needs" subtitle="From scheduled preventive care to emergency repair and genuine spare parts — we cover the full equipment lifecycle."/><section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24"><div className="grid gap-6 lg:grid-cols-3">{items.map(s=><article key={s.title} className="overflow-hidden rounded-2xl border border-border bg-card"><div className="aspect-[4/3] overflow-hidden"><img width={960} height={720} decoding="async" src={s.image} alt={s.title} loading="lazy" className="size-full object-cover"/></div><div className="p-6"><s.icon className="size-6 text-primary"/><h2 className="mt-3 text-xl font-bold">{s.title}</h2><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p><ul className="mt-4 space-y-2 border-t border-border pt-4">{s.points.map(p=><li key={p} className="flex gap-2 text-sm"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary"/>{p}</li>)}</ul></div></article>)}</div></section><section className="border-t border-border bg-card/30"><div className="mx-auto max-w-7xl px-5 py-16 md:px-8"><h2 className="text-3xl font-extrabold">Additional capabilities</h2><div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{capabilities.map(c=><div key={c.title} className="rounded-xl border border-border p-5"><c.icon className="size-6 text-primary"/><h3 className="mt-3 font-bold">{c.title}</h3><p className="mt-1 text-sm text-muted-foreground">{c.desc}</p></div>)}</div><div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-primary/25 pt-8 md:flex-row md:items-center"><div><h2 className="text-2xl font-extrabold">Equipment down right now?</h2><p className="mt-1 text-muted-foreground">Send a request and a technician will contact you during business hours.</p></div><Link to="/en/contact" className="rounded-full bg-primary px-7 py-3 text-sm font-bold text-primary-foreground">Request service</Link></div></div></section></PageShell>}
