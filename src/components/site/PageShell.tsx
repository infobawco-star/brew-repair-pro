import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export type Locale = "ar" | "en";

export function PageShell({ children, locale = "ar" }: { children: ReactNode; locale?: Locale }) {
  return (
    <div className="min-h-screen bg-background" lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <SiteHeader locale={locale} />
      <main id="main-content">{children}</main>
      <SiteFooter locale={locale} />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  locale = "ar",
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  locale?: Locale;
}) {
  return (
    <section lang={locale} dir={locale === "ar" ? "rtl" : "ltr"} className="relative overflow-hidden border-b border-border pt-32 pb-16">
      <div className="bg-grid absolute inset-0 opacity-50" aria-hidden />
      <div
        className="absolute -top-24 left-1/3 size-96 rounded-full bg-primary/12 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <span className="inline-flex rounded-full border border-primary/30 bg-primary/8 px-3.5 py-1 text-xs font-bold tracking-wide text-primary">
          {eyebrow}
        </span>
        <h1 className="mt-5 max-w-3xl text-4xl leading-[1.15] font-extrabold md:text-6xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
