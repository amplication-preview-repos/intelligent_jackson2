import { TrackingEventWhereInput } from "./TrackingEventWhereInput";
import { TrackingEventOrderByInput } from "./TrackingEventOrderByInput";

export type TrackingEventFindManyArgs = {
  where?: TrackingEventWhereInput;
  orderBy?: Array<TrackingEventOrderByInput>;
  skip?: number;
  take?: number;
};
