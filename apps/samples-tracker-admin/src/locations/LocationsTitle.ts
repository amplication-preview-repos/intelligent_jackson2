import { Locations as TLocations } from "../api/locations/Locations";

export const LOCATIONS_TITLE_FIELD = "name";

export const LocationsTitle = (record: TLocations): string => {
  return record.name?.toString() || String(record.id);
};
