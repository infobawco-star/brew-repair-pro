import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const requestSchema = z.object({
  name: z.string().trim().min(1, "الاسم مطلوب").max(100),
  phone: z
    .string()
    .trim()
    .regex(/^[+\d][\d\s-]{7,14}$/, "رقم الجوال غير صحيح")
    .max(20),
  cafe: z.string().trim().min(1, "اسم المقهى مطلوب").max(100),
  city: z.string().trim().min(1, "المدينة مطلوبة").max(60),
  device: z.string().trim().min(1).max(60),
  service: z.string().trim().min(1).max(60),
  details: z.string().trim().max(1000).optional().default(""),
});

// البريد الذي تصله إشعارات الطلبات — عدّله لبريدك الفعلي
const OWNER_EMAIL = "care@fixbar.sa";

export const submitServiceRequest = createServerFn({ method: "POST" })
  .inputValidator((data) => requestSchema.parse(data))
  .handler(async ({ data }) => {
    const { sendTemplateEmail } = await import("@/lib/email-templates/send-email");

    const result = await sendTemplateEmail("service-request", OWNER_EMAIL, {
      templateData: { ...data },
      idempotencyKey: `service-request-${data.phone}-${Date.now()}`,
    });

    if (!result.sent && result.reason === "error") {
      console.error("Service request email failed:", result.message);
    }

    // نُعيد نجاحاً دائماً حتى لا تتسرب حالة الإرسال الداخلية للعميل
    return { ok: true };
  });
