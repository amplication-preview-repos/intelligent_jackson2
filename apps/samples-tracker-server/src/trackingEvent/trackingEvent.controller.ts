import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TrackingEventService } from "./trackingEvent.service";
import { TrackingEventControllerBase } from "./base/trackingEvent.controller.base";

@swagger.ApiTags("trackingEvents")
@common.Controller("trackingEvents")
export class TrackingEventController extends TrackingEventControllerBase {
  constructor(protected readonly service: TrackingEventService) {
    super(service);
  }
}
