import { Document as TDocument } from "../api/document/Document";

export const DOCUMENT_TITLE_FIELD = "barcode";

export const DocumentTitle = (record: TDocument): string => {
  return record.barcode?.toString() || String(record.id);
};
