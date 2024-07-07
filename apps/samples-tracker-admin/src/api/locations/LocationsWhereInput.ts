import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TrackingEventListRelationFilter } from "../trackingEvent/TrackingEventListRelationFilter";

export type LocationsWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  typeField?: "Option1";
  address?: StringNullableFilter;
  trackingEvents?: TrackingEventListRelationFilter;
};
