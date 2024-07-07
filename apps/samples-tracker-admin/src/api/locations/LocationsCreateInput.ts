import { TrackingEventCreateNestedManyWithoutLocationsItemsInput } from "./TrackingEventCreateNestedManyWithoutLocationsItemsInput";

export type LocationsCreateInput = {
  name?: string | null;
  typeField?: "Option1" | null;
  address?: string | null;
  trackingEvents?: TrackingEventCreateNestedManyWithoutLocationsItemsInput;
};
