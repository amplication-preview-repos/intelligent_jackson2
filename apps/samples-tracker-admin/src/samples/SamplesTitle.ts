import { Samples as TSamples } from "../api/samples/Samples";

export const SAMPLES_TITLE_FIELD = "barcode";

export const SamplesTitle = (record: TSamples): string => {
  return record.barcode?.toString() || String(record.id);
};
