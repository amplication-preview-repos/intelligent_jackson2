import { LocationsWhereUniqueInput } from "../locations/LocationsWhereUniqueInput";

export type TrackingEventUpdateInput = {
  timestamp?: Date | null;
  action?: string | null;
  reference?: string | null;
  location?: LocationsWhereUniqueInput | null;
};