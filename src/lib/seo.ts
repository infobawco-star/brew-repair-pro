// إعدادات SEO المشتركة لكل الصفحات (عربي + إنجليزي)
export const SITE_URL = "https://brew-repair-pro.lovable.app";

export type SeoLocale = "ar" | "en";

/** يحوّل المسار العربي إلى نظيره الإنجليزي والعكس */
export function localePaths(arPath: string) {
  const ar = arPath === "/" ? "/" : arPath;
  const en = arPath === "/" ? "/en" : `/en${arPath}`;
  return { ar, en };
}

export function abs(path: string) {
  return `${SITE_URL}${path === "/" ? "/" : path}`;
}

export function pageHead(options: {
  locale: SeoLocale;
  /** المسار العربي المرجعي، مثل "/" أو "/services" */
  arPath: string;
  title: string;
  description: string;
  ogType?: string;
  jsonLd?: unknown[];
}) {
  const { locale, arPath, title, description, ogType = "website", jsonLd } = options;
  const paths = localePaths(arPath);
  const self = abs(locale === "ar" ? paths.ar : paths.en);

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: ogType },
      { property: "og:url", content: self },
      { property: "og:site_name", content: "FixBar" },
      { property: "og:locale", content: locale === "ar" ? "ar_SA" : "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "robots", content: "index, follow, max-image-preview:large" },
    ],
    links: [
      { rel: "canonical", href: self },
      { rel: "alternate", hrefLang: "ar", href: abs(paths.ar) },
      { rel: "alternate", hrefLang: "en", href: abs(paths.en) },
      { rel: "alternate", hrefLang: "x-default", href: abs(paths.ar) },
    ],
    ...(jsonLd && jsonLd.length
      ? {
          scripts: jsonLd.map((data) => ({
            type: "application/ld+json",
            children: JSON.stringify(data),
          })),
        }
      : {}),
  };
}

/** بيانات منظمة للنشاط التجاري — تُستخدم في الصفحة الرئيسية */
export function businessJsonLd(locale: SeoLocale) {
  const ar = locale === "ar";
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#business`,
    name: ar ? "FixBar — صيانة أجهزة المقاهي" : "FixBar — Café Equipment Maintenance",
    description: ar
      ? "صيانة وإصلاح أجهزة الإسبريسو والمطاحن للمقاهي في السعودية."
      : "Espresso machine and grinder maintenance and repair for cafés in Saudi Arabia.",
    url: abs(ar ? "/" : "/en"),
    telephone: "+966548962117",
    email: "care@fixbarsa.com",
    image: `${SITE_URL}/fixbar-logo-official.svg`,
    logo: `${SITE_URL}/fixbar-logo-official.svg`,
    priceRange: "SAR",
    areaServed: { "@type": "Country", name: ar ? "السعودية" : "Saudi Arabia" },
    address: {
      "@type": "PostalAddress",
      addressLocality: ar ? "الرياض" : "Riyadh",
      addressCountry: "SA",
    },
    inLanguage: ar ? "ar" : "en",
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: abs(item.path),
    })),
  };
}
