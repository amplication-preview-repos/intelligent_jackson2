import { SortOrder } from "../../util/SortOrder";

export type BoxesOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  typeField?: SortOrder;
  capacity?: SortOrder;
  barcode?: SortOrder;
};
