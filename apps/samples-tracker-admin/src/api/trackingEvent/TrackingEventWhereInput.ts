import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { LocationsWhereUniqueInput } from "../locations/LocationsWhereUniqueInput";

export type TrackingEventWhereInput = {
  id?: StringFilter;
  timestamp?: DateTimeNullableFilter;
  action?: StringNullableFilter;
  reference?: StringNullableFilter;
  location?: LocationsWhereUniqueInput;
};
