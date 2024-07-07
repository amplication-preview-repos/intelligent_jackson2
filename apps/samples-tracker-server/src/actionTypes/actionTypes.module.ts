import { Module } from "@nestjs/common";
import { ActionTypesModuleBase } from "./base/actionTypes.module.base";
import { ActionTypesService } from "./actionTypes.service";
import { ActionTypesController } from "./actionTypes.controller";
import { ActionTypesResolver } from "./actionTypes.resolver";

@Module({
  imports: [ActionTypesModuleBase],
  controllers: [ActionTypesController],
  providers: [ActionTypesService, ActionTypesResolver],
  exports: [ActionTypesService],
})
export class ActionTypesModule {}
