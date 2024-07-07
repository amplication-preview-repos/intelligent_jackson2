import { InputJsonValue } from "../../types";

export type DocumentUpdateInput = {
  barcode?: string | null;
  typeField?: string | null;
  content?: InputJsonValue;
};
