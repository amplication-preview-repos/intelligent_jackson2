import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type BoxesWhereInput = {
  id?: StringFilter;
  typeField?: StringNullableFilter;
  capacity?: IntNullableFilter;
  barcode?: StringNullableFilter;
};
