import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import type { Locale } from "./PageShell";
import { LOGO_URL } from "./logo";

export function SiteHeader({ locale = "ar" }: { locale?: Locale }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const english = locale === "en";
  const prefix = english ? "/en" : "";
  const links = [
    { to: english ? "/en" : "/", label: english ? "Home" : "الرئيسية" },
    { to: `${prefix}/services`, label: english ? "Services" : "الخدمات" },
    { to: `${prefix}/pricing`, label: english ? "Plans" : "الباقات" },
    { to: `${prefix}/about`, label: english ? "About" : "من نحن" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="relative mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-5 py-3 md:px-8">
        <Link to={english ? "/en" : "/"} className="relative z-10 flex shrink-0 items-center">
          <span className="logo-neon block h-12 w-36 shrink-0 overflow-hidden md:h-14 md:w-44">
            <img src={LOGO_URL} alt="FixBar" className="size-full object-contain" />
          </span>
        </Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" || l.to === "/en" }}
              activeProps={{ className: "text-primary" }}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="relative z-10 flex items-center gap-2">
          <Link
            to={english ? "/" : "/en"}
            aria-label={english ? "العربية" : "English"}
            className="inline-flex h-10 min-w-11 items-center justify-center rounded-lg border border-primary/30 px-3 text-xs font-bold text-primary transition-colors hover:bg-primary/10"
          >
            {english ? "ع" : "EN"}
          </Link>
          <Link
            to={english ? "/en/contact" : "/contact"}
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.04] md:inline-flex"
          >
            {english ? "Request service" : "اطلب صيانة"}
          </Link>
          <button
            type="button"
            aria-label={english ? "Menu" : "القائمة"}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-10 items-center justify-center rounded-lg border border-border text-foreground md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: l.to === "/" || l.to === "/en" }}
                activeProps={{ className: "text-primary" }}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to={english ? "/en/contact" : "/contact"}
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-primary px-5 py-2.5 text-center text-sm font-bold text-primary-foreground"
            >
              {english ? "Request service" : "اطلب صيانة"}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
