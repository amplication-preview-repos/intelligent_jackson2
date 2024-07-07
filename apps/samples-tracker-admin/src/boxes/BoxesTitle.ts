import { Boxes as TBoxes } from "../api/boxes/Boxes";

export const BOXES_TITLE_FIELD = "typeField";

export const BoxesTitle = (record: TBoxes): string => {
  return record.typeField?.toString() || String(record.id);
};
