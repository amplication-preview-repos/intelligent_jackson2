import { Shipments as TShipments } from "../api/shipments/Shipments";

export const SHIPMENTS_TITLE_FIELD = "shipmentNumber";

export const ShipmentsTitle = (record: TShipments): string => {
  return record.shipmentNumber?.toString() || String(record.id);
};
