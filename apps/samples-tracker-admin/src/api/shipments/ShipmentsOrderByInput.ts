import { SortOrder } from "../../util/SortOrder";

export type ShipmentsOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  shipmentNumber?: SortOrder;
  status?: SortOrder;
};
