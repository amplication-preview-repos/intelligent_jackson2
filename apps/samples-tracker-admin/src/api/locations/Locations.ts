import { TrackingEvent } from "../trackingEvent/TrackingEvent";

export type Locations = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  typeField?: "Option1" | null;
  address: string | null;
  trackingEvents?: Array<TrackingEvent>;
};
