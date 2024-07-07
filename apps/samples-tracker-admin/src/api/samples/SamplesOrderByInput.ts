import { SortOrder } from "../../util/SortOrder";

export type SamplesOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  barcode?: SortOrder;
  typeField?: SortOrder;
  status?: SortOrder;
};
