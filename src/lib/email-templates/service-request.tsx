import React from "react";
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import type { TemplateEntry } from "./registry";

interface Props {
  name?: string;
  phone?: string;
  cafe?: string;
  city?: string;
  device?: string;
  service?: string;
  details?: string;
}

const row = (label: string, value?: string) =>
  value ? (
    <Text style={item}>
      <span style={itemLabel}>{label}: </span>
      {value}
    </Text>
  ) : null;

const Email = ({ name, phone, cafe, city, device, service, details }: Props) => (
  <Html lang="ar" dir="rtl">
    <Head />
    <Preview>طلب صيانة جديد من {name ?? "عميل"} — {cafe ?? "FixBar"}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={logo}>
          Fix<span style={{ color: "#22c55e" }}>Bar</span>
        </Heading>
        <Heading as="h2" style={title}>
          طلب خدمة جديد
        </Heading>
        <Section style={card}>
          {row("الاسم", name)}
          {row("الجوال", phone)}
          {row("المقهى", cafe)}
          {row("المدينة", city)}
          {row("نوع الجهاز", device)}
          {row("نوع الخدمة", service)}
        </Section>
        {details ? (
          <Section>
            <Hr style={hr} />
            <Text style={itemLabel}>وصف المشكلة:</Text>
            <Text style={detailsStyle}>{details}</Text>
          </Section>
        ) : null}
        <Hr style={hr} />
        <Text style={footer}>
          وصلك هذا الإيميل لأن عميلاً أرسل طلب خدمة عبر نموذج موقع FixBar.
        </Text>
      </Container>
    </Body>
  </Html>
);

export const template = {
  component: Email,
  subject: "طلب صيانة جديد — FixBar",
  displayName: "إشعار طلب خدمة",
  previewData: {
    name: "محمد العتيبي",
    phone: "0551234567",
    cafe: "مقهى روّاد",
    city: "الرياض",
    device: "آلة إسبريسو",
    service: "إصلاح عطل طارئ",
    details: "جهاز الإسبريسو لا يصل لدرجة الحرارة المطلوبة منذ أسبوع.",
  },
} satisfies TemplateEntry;

const main = { backgroundColor: "#ffffff", fontFamily: "Arial, sans-serif" };
const container = { padding: "24px", maxWidth: "560px", margin: "0 auto" };
const logo = { fontSize: "24px", fontWeight: "800" as const, margin: "0 0 8px" };
const title = { fontSize: "20px", margin: "0 0 16px" };
const card = {
  backgroundColor: "#f6f8f6",
  borderRadius: "12px",
  padding: "16px 20px",
};
const item = { fontSize: "14px", margin: "6px 0", color: "#1a1a1a" };
const itemLabel = { fontWeight: "700" as const, color: "#16a34a" };
const detailsStyle = {
  fontSize: "14px",
  lineHeight: "1.8",
  color: "#333333",
  whiteSpace: "pre-wrap" as const,
};
const hr = { borderColor: "#e5e5e5", margin: "20px 0" };
const footer = { fontSize: "12px", color: "#888888" };
