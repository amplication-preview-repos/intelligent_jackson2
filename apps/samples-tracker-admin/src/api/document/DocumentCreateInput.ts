import { InputJsonValue } from "../../types";

export type DocumentCreateInput = {
  barcode?: string | null;
  typeField?: string | null;
  content?: InputJsonValue;
};
