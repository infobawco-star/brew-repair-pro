import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";
import { CONTACT } from "../../lib/contact.config";
import type { Locale } from "./PageShell";
import logoAsset from "../../assets/fixbar-logo.png.asset.json";

export function SiteFooter({ locale = "ar" }: { locale?: Locale }) {
  const english = locale === "en";
  const prefix = english ? "/en" : "";
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <img src={logoAsset.url} alt="FixBar" width={1590} height={600} className="logo-neon h-16 w-48 object-contain" />
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {english ? "Keeping your café equipment performing at its best with preventive maintenance, responsive repairs, and genuine parts." : "نبقي أجهزة مقهاك تعمل بأفضل حالاتها — صيانة دورية، إصلاح أعطال، وقطع غيار أصلية بفريق فني معتمد."}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <h3 className="text-sm font-bold text-foreground">{english ? "Explore" : "الموقع"}</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link to={`${prefix}/services`} className="hover:text-primary">
                    {english ? "Services" : "الخدمات"}
                  </Link>
                </li>
                <li>
                  <Link to={`${prefix}/pricing`} className="hover:text-primary">
                    {english ? "Plans" : "الباقات"}
                  </Link>
                </li>
                <li>
                  <Link to={`${prefix}/about`} className="hover:text-primary">
                    {english ? "About" : "من نحن"}
                  </Link>
                </li>
                <li>
                  <Link to={`${prefix}/contact`} className="hover:text-primary">
                    {english ? "Request service" : "طلب خدمة"}
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-2">
              <h3 className="text-sm font-bold text-foreground">{english ? "Contact" : "تواصل معنا"}</h3>
              <ul className="mt-3 space-y-2.5 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Phone className="size-4 text-primary" />
                  <span dir="ltr">{CONTACT.phoneDisplay}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="size-4 text-primary" />
                  <span dir="ltr">care@fixbarsa.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="size-4 text-primary" />
                  {english ? "Riyadh — service across Saudi Arabia" : "الرياض — تغطية لجميع مناطق المملكة"}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} FixBar. {english ? "All rights reserved." : "جميع الحقوق محفوظة."}
        </div>
      </div>
    </footer>
  );
}
