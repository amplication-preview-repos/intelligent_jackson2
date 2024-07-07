import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ShipmentsServiceBase } from "./base/shipments.service.base";

@Injectable()
export class ShipmentsService extends ShipmentsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
