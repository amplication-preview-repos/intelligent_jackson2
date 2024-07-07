import { JsonValue } from "type-fest";

export type Document = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  barcode: string | null;
  typeField: string | null;
  content: JsonValue;
};
