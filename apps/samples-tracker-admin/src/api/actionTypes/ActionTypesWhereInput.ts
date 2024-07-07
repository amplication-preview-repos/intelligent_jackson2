import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ActionTypesWhereInput = {
  id?: StringFilter;
  action?: StringNullableFilter;
  description?: StringNullableFilter;
};
