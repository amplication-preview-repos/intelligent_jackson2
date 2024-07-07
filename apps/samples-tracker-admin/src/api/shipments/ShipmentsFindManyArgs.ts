import { ShipmentsWhereInput } from "./ShipmentsWhereInput";
import { ShipmentsOrderByInput } from "./ShipmentsOrderByInput";

export type ShipmentsFindManyArgs = {
  where?: ShipmentsWhereInput;
  orderBy?: Array<ShipmentsOrderByInput>;
  skip?: number;
  take?: number;
};
