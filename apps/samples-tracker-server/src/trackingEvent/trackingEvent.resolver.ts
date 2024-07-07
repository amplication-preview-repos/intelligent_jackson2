import * as graphql from "@nestjs/graphql";
import { TrackingEventResolverBase } from "./base/trackingEvent.resolver.base";
import { TrackingEvent } from "./base/TrackingEvent";
import { TrackingEventService } from "./trackingEvent.service";

@graphql.Resolver(() => TrackingEvent)
export class TrackingEventResolver extends TrackingEventResolverBase {
  constructor(protected readonly service: TrackingEventService) {
    super(service);
  }
}
