import type { ReactElement } from "react";

export interface TemplateEntry {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: (props: any) => ReactElement;
  subject: string;
  displayName?: string;
  previewData?: Record<string, unknown>;
}

import { template as serviceRequest } from "./service-request";

export const TEMPLATES: Record<string, TemplateEntry> = {
  "service-request": serviceRequest,
};
