export type Samples = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  barcode: string | null;
  typeField: string | null;
  status?: "Option1" | null;
};
