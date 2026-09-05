import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, PageShell } from "../../components/site/PageShell";
import serviceRepair from "../../assets/service-repair.jpg";
import { breadcrumbJsonLd, pageHead } from "../../lib/seo";
export const Route=createFileRoute("/en/about")({
  staticData: { sitemap: true },
  head: () =>
    pageHead({
      locale: "en",
      arPath: "/about",
      title: "About FixBar — Café Equipment Specialists",
      description:
        "Meet the Saudi technical team specializing in espresso machine and grinder maintenance, with committed response times and written reports.",
      jsonLd: [breadcrumbJsonLd([{ name: "Home", path: "/en" }, { name: "About", path: "/en/about" }])],
    }),
  component:About});
const values=[{title:"Engineer precision, barista awareness",desc:"We understand the equipment as an engineered system, and what downtime means to every cup and every customer."},{title:"Complete transparency",desc:"A written report after every visit explains what we inspected, replaced, and what needs attention next."},{title:"Your uptime comes first",desc:"Committed response times and temporary replacement equipment help keep your café selling."}];
function About(){return <PageShell locale="en"><PageHero locale="en" eyebrow="ABOUT US" title="A team that loves coffee and understands its equipment" subtitle="FixBar began after seeing cafés lose customers to preventable breakdowns. Today, we support cafés across Saudi Arabia with maintenance contracts and emergency response."/><section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24"><div className="grid items-center gap-10 lg:grid-cols-2"><div className="overflow-hidden rounded-2xl border border-border"><img width={960} height={720} decoding="async" src={serviceRepair} alt="FixBar technician calibrating an espresso machine" loading="lazy" className="size-full object-cover"/></div><div className="space-y-6">{values.map(v=><div key={v.title} className="border-b border-border pb-6"><h2 className="text-lg font-bold text-primary">{v.title}</h2><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.desc}</p></div>)}</div></div><div className="mt-16 border-t border-primary/25 pt-10 text-center"><h2 className="text-2xl font-extrabold">Ready for us to care for your equipment?</h2><p className="mt-2 text-muted-foreground">Request service or ask about our plans — we reply during business hours.</p><Link to="/en/contact" className="mt-6 inline-flex rounded-full bg-primary px-8 py-3 text-sm font-bold text-primary-foreground">Request service</Link></div></section></PageShell>}
