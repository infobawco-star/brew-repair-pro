import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { PageShell, PageHero } from "../components/site/PageShell";
import { submitServiceRequest } from "../lib/service-request.functions";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "اطلب خدمة صيانة — FixBar" },
      {
        name: "description",
        content:
          "أرسل طلب صيانة أو إصلاح لأجهزة مقهاك — صف نوع الجهاز والعطل وسيتواصل معك فني FixBar.",
      },
      { property: "og:title", content: "اطلب خدمة صيانة — FixBar" },
      {
        property: "og:description",
        content: "نموذج طلب صيانة وإصلاح أجهزة القهوة للمقاهي.",
      },
    ],
  }),
  component: ContactPage,
});

const inputCls =
  "w-full rounded-lg border border-input bg-background/70 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-hidden transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30";

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    const fd = new FormData(e.currentTarget);
    try {
      await submitServiceRequest({
        data: {
          name: String(fd.get("name") ?? ""),
          phone: String(fd.get("phone") ?? ""),
          cafe: String(fd.get("cafe") ?? ""),
          city: String(fd.get("city") ?? ""),
          device: String(fd.get("device") ?? ""),
          service: String(fd.get("service") ?? ""),
          details: String(fd.get("details") ?? ""),
        },
      });
      setSent(true);
    } catch (error) {
      const message =
        error instanceof Error && error.message.includes("الجوال")
          ? "رقم الجوال غير صحيح، تأكد من الصيغة 05xxxxxxxx"
          : "تعذر إرسال الطلب، حاول مرة أخرى";
      toast.error(message);
    } finally {
      setSending(false);
    }
  };

  return (
    <PageShell>
      <PageHero
        eyebrow="اطلب خدمة"
        title="أخبرنا عن جهازك ونحن نتكفل بالباقي"
        subtitle="عبّئ النموذج وسيتواصل معك فني FixBar خلال ساعات العمل لتأكيد الموعد والتفاصيل."
      />

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            {sent ? (
              <div className="flex min-h-96 flex-col items-center justify-center text-center">
                <span className="flex size-16 items-center justify-center rounded-full bg-primary/12 ring-1 ring-primary/40">
                  <CheckCircle2 className="size-8 text-primary" />
                </span>
                <h2 className="mt-5 text-2xl font-extrabold">تم استلام طلبك</h2>
                <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                  شكراً لك! سيتواصل معك فريق FixBar قريباً لتأكيد تفاصيل الصيانة
                  والموعد المناسب.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-6 rounded-full border border-border px-6 py-2.5 text-sm font-medium transition-colors hover:border-primary/50 hover:text-primary"
                >
                  إرسال طلب آخر
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                      الاسم
                    </label>
                    <input id="name" name="name" required placeholder="اسمك الكريم" className={inputCls} />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-sm font-medium">
                      رقم الجوال
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      dir="ltr"
                      placeholder="05xxxxxxxx"
                      className={`${inputCls} text-left`}
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="cafe" className="mb-1.5 block text-sm font-medium">
                      اسم المقهى
                    </label>
                    <input id="cafe" name="cafe" required placeholder="مقهى ..." className={inputCls} />
                  </div>
                  <div>
                    <label htmlFor="city" className="mb-1.5 block text-sm font-medium">
                      المدينة
                    </label>
                    <input id="city" name="city" required placeholder="الرياض" className={inputCls} />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="device" className="mb-1.5 block text-sm font-medium">
                      نوع الجهاز
                    </label>
                    <select id="device" name="device" required className={inputCls} defaultValue="">
                      <option value="" disabled>
                        اختر نوع الجهاز
                      </option>
                      <option>آلة إسبريسو</option>
                      <option>مطحنة قهوة</option>
                      <option>محمصة</option>
                      <option>جهاز تقطير / V60 أوتوماتيكي</option>
                      <option>أخرى</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="service" className="mb-1.5 block text-sm font-medium">
                      نوع الخدمة
                    </label>
                    <select id="service" name="service" required className={inputCls} defaultValue="">
                      <option value="" disabled>
                        اختر الخدمة
                      </option>
                      <option>إصلاح عطل طارئ</option>
                      <option>صيانة دورية</option>
                      <option>طلب قطع غيار</option>
                      <option>استفسار عن الباقات</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="details" className="mb-1.5 block text-sm font-medium">
                    وصف المشكلة أو الطلب
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    rows={4}
                    placeholder="مثال: جهاز الإسبريسو لا يصل لدرجة الحرارة المطلوبة منذ أسبوع..."
                    className={inputCls}
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-primary py-3.5 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.02] disabled:opacity-60"
                >
                  {sending && <Loader2 className="size-4 animate-spin" />}
                  {sending ? "جارٍ الإرسال..." : "إرسال الطلب"}
                </button>
              </form>
            )}
          </div>

          <aside className="space-y-4">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="text-lg font-bold">تواصل مباشر</h2>
              <ul className="mt-4 space-y-4 text-sm">
                <li className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/30">
                    <Phone className="size-4" />
                  </span>
                  <div>
                    <p className="text-muted-foreground">الخط الساخن</p>
                    <p className="font-bold" dir="ltr">+966 55 000 0000</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/30">
                    <Mail className="size-4" />
                  </span>
                  <div>
                    <p className="text-muted-foreground">البريد الإلكتروني</p>
                    <p className="font-bold" dir="ltr">care@fixbarsa.com</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/30">
                    <MapPin className="size-4" />
                  </span>
                  <div>
                    <p className="text-muted-foreground">التغطية</p>
                    <p className="font-bold">الرياض وجميع مناطق المملكة</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-primary/25 bg-primary/5 p-6">
              <h2 className="text-lg font-bold text-primary">عطل طارئ؟</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                للمشتركين في الباقة الاحترافية، نستجيب للأعطال الطارئة خلال ٢٤
                ساعة مع توفير جهاز بديل مؤقت.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </PageShell>
  );
}
