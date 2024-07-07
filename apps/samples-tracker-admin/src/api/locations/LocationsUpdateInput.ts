import { TrackingEventUpdateManyWithoutLocationsItemsInput } from "./TrackingEventUpdateManyWithoutLocationsItemsInput";

export type LocationsUpdateInput = {
  name?: string | null;
  typeField?: "Option1" | null;
  address?: string | null;
  trackingEvents?: TrackingEventUpdateManyWithoutLocationsItemsInput;
};
