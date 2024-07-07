import { Locations } from "../locations/Locations";

export type TrackingEvent = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  timestamp: Date | null;
  action: string | null;
  reference: string | null;
  location?: Locations | null;
};
