import { Module } from "@nestjs/common";
import { TrackingEventModuleBase } from "./base/trackingEvent.module.base";
import { TrackingEventService } from "./trackingEvent.service";
import { TrackingEventController } from "./trackingEvent.controller";
import { TrackingEventResolver } from "./trackingEvent.resolver";

@Module({
  imports: [TrackingEventModuleBase],
  controllers: [TrackingEventController],
  providers: [TrackingEventService, TrackingEventResolver],
  exports: [TrackingEventService],
})
export class TrackingEventModule {}
