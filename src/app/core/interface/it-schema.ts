export interface ItSchema {
  type: string;
  required?: boolean;
}

export type ItSchemaMain = Record<string, ItSchema>;
