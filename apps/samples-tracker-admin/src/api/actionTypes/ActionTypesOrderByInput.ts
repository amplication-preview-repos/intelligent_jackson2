import { SortOrder } from "../../util/SortOrder";

export type ActionTypesOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  action?: SortOrder;
  description?: SortOrder;
};
