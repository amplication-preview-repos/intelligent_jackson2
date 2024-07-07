import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SamplesWhereInput = {
  id?: StringFilter;
  barcode?: StringNullableFilter;
  typeField?: StringNullableFilter;
  status?: "Option1";
};
