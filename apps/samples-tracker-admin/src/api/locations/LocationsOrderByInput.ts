import { SortOrder } from "../../util/SortOrder";

export type LocationsOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  typeField?: SortOrder;
  address?: SortOrder;
};
