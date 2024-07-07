import { SortOrder } from "../../util/SortOrder";

export type DocumentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  barcode?: SortOrder;
  typeField?: SortOrder;
  content?: SortOrder;
};
