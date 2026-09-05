import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Sparkles } from "lucide-react";
import { PageHero, PageShell } from "../../components/site/PageShell";
import { breadcrumbJsonLd, pageHead } from "../../lib/seo";
export const Route=createFileRoute("/en/pricing")({
  staticData: { sitemap: true },
  head: () =>
    pageHead({
      locale: "en",
      arPath: "/pricing",
      title: "Maintenance Plans & Pricing — FixBar",
      description:
        "Flexible monthly and annual café equipment maintenance plans — Essential, Professional, and Enterprise — with transparent pricing.",
      jsonLd: [breadcrumbJsonLd([{ name: "Home", path: "/en" }, { name: "Plans & Pricing", path: "/en/pricing" }])],
    }),
  component:Pricing});
const tiers=[{name:"Essential",price:"SAR 499",unit:"per month",desc:"For a growing café with one espresso machine.",features:["Service visit every two months","25-point inspection","10% off spare parts","Business-hours phone support"]},{name:"Professional",price:"SAR 899",unit:"per month",desc:"For busy cafés operating at full capacity.",features:["Monthly preventive service","Emergency response within 24 hours","Temporary replacement equipment","20% off spare parts","Monthly performance report"],featured:true},{name:"Enterprise",price:"Custom",unit:"annual contract",desc:"For café groups, hotels, and major operators.",features:["Custom schedule for every branch","Dedicated technician and hotline","Spare parts included","Centralized reporting","Daily-care barista training"]}];
function Pricing(){return <PageShell locale="en"><PageHero locale="en" eyebrow="PLANS" title="Clear pricing. No surprises." subtitle="Choose the right plan for your café. Every plan includes routine inspections and service reports, with upgrades available at any time."/><section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24"><div className="grid gap-6 lg:grid-cols-3">{tiers.map(t=><article key={t.name} className={`relative flex flex-col rounded-2xl border p-7 ${t.featured?"card-glow border-primary/50 bg-card":"border-border bg-card/60"}`}>{t.featured&&<span className="absolute -top-3.5 right-6 inline-flex items-center gap-1 rounded-full bg-primary px-3.5 py-1 text-xs font-bold text-primary-foreground"><Sparkles className="size-3.5"/>Most popular</span>}<h2 className="text-lg font-bold">{t.name}</h2><p className="mt-1 text-sm text-muted-foreground">{t.desc}</p><p className={`mt-5 text-4xl font-extrabold ${t.featured?"text-primary":""}`}>{t.price}</p><p className="text-sm text-muted-foreground">{t.unit}</p><ul className="mt-6 flex-1 space-y-3 border-t border-border pt-6">{t.features.map(f=><li key={f} className="flex gap-2.5 text-sm"><Check className="mt-0.5 size-4 shrink-0 text-primary"/>{f}</li>)}</ul><Link to="/en/contact" className={`mt-7 rounded-full py-3 text-center text-sm font-bold ${t.featured?"bg-primary text-primary-foreground":"border border-border bg-secondary"}`}>Choose this plan</Link></article>)}</div><p className="mt-10 text-center text-sm text-muted-foreground">Prices exclude VAT. Need a custom plan? <Link to="/en/contact" className="font-bold text-primary">Contact us</Link></p></section></PageShell>}
