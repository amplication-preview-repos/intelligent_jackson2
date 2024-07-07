import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type DocumentWhereInput = {
  id?: StringFilter;
  barcode?: StringNullableFilter;
  typeField?: StringNullableFilter;
  content?: JsonFilter;
};
