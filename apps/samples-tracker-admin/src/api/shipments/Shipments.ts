export type Shipments = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  shipmentNumber: string | null;
  status?: "Option1" | null;
};
