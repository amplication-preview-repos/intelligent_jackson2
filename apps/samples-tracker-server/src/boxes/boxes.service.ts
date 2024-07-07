import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BoxesServiceBase } from "./base/boxes.service.base";

@Injectable()
export class BoxesService extends BoxesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
