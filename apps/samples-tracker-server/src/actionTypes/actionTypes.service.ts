import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ActionTypesServiceBase } from "./base/actionTypes.service.base";

@Injectable()
export class ActionTypesService extends ActionTypesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
