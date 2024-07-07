import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ShipmentsWhereInput = {
  id?: StringFilter;
  shipmentNumber?: StringNullableFilter;
  status?: "Option1";
};
