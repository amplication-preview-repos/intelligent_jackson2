import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SamplesServiceBase } from "./base/samples.service.base";

@Injectable()
export class SamplesService extends SamplesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
