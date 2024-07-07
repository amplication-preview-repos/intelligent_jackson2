import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TrackingEventServiceBase } from "./base/trackingEvent.service.base";

@Injectable()
export class TrackingEventService extends TrackingEventServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
