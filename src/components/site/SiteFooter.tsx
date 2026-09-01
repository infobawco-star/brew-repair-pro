import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";
import { CONTACT } from "../../lib/contact.config";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <span className="text-2xl font-extrabold tracking-tight">
              Fix<span className="text-primary">Bar</span>
            </span>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              نبقي أجهزة مقهاك تعمل بأفضل حالاتها — صيانة دورية، إصلاح أعطال،
              وقطع غيار أصلية بفريق فني معتمد.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <h3 className="text-sm font-bold text-foreground">الموقع</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link to="/services" className="hover:text-primary">
                    الخدمات
                  </Link>
                </li>
                <li>
                  <Link to="/pricing" className="hover:text-primary">
                    الباقات
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-primary">
                    من نحن
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-primary">
                    طلب خدمة
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-2">
              <h3 className="text-sm font-bold text-foreground">تواصل معنا</h3>
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
                  الرياض — تغطية لجميع مناطق المملكة
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} FixBar. جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  );
}
