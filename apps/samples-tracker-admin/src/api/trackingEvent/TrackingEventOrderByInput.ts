import { SortOrder } from "../../util/SortOrder";

export type TrackingEventOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  timestamp?: SortOrder;
  action?: SortOrder;
  reference?: SortOrder;
  locationId?: SortOrder;
};
