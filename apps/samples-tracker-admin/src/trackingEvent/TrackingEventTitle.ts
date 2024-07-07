import { TrackingEvent as TTrackingEvent } from "../api/trackingEvent/TrackingEvent";

export const TRACKINGEVENT_TITLE_FIELD = "action";

export const TrackingEventTitle = (record: TTrackingEvent): string => {
  return record.action?.toString() || String(record.id);
};
