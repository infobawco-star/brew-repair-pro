import { render } from "@react-email/render";
import { createElement } from "react";
import { EmailAPIError, sendLovableEmail } from "@lovable.dev/email-js";

import { TEMPLATES } from "./registry";

// النطاق المفوَّض لإرسال الإيميلات
export const SENDER_DOMAIN = "real.fixbarsa.com";
export const FROM_DOMAIN = "fixbarsa.com";
const FROM_ADDRESS = `FixBar <no-reply@${FROM_DOMAIN}>`;

export type SendResult =
  | { sent: true }
  | { sent: false; reason: "recipient_suppressed" | "error"; message?: string };

export async function sendTemplateEmail(
  templateName: keyof typeof TEMPLATES & string,
  to: string,
  options: {
    templateData?: Record<string, unknown>;
    idempotencyKey?: string;
  } = {},
): Promise<SendResult> {
  const entry = TEMPLATES[templateName];
  if (!entry) throw new Error(`Unknown email template: ${templateName}`);

  const apiKey = process.env["LOVABLE_API_KEY"];
  if (!apiKey) throw new Error("LOVABLE_API_KEY is not configured");

  const html = await render(
    createElement(entry.component, options.templateData ?? {}),
  );

  try {
    await sendLovableEmail(
      {
        to,
        from: FROM_ADDRESS,
        sender_domain: SENDER_DOMAIN,
        subject: entry.subject,
        html,
        text: entry.subject,
        purpose: "transactional",
      },
      { apiKey, ...(options.idempotencyKey ? { idempotencyKey: options.idempotencyKey } : {}) },
    );
    return { sent: true };
  } catch (error) {
    if (error instanceof EmailAPIError) {
      // مستلم كتم الإشعارات — حالة متوقعة وليست خطأ
      if (error.status === 422) {
        return { sent: false, reason: "recipient_suppressed" };
      }
      console.error(`Email send failed [${error.code}]: ${error.message}`);
      return { sent: false, reason: "error", message: error.code ?? "unknown" };
    }
    throw error;
  }
}
