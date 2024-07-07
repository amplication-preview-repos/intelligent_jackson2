import { Module } from "@nestjs/common";
import { ShipmentsModuleBase } from "./base/shipments.module.base";
import { ShipmentsService } from "./shipments.service";
import { ShipmentsController } from "./shipments.controller";
import { ShipmentsResolver } from "./shipments.resolver";

@Module({
  imports: [ShipmentsModuleBase],
  controllers: [ShipmentsController],
  providers: [ShipmentsService, ShipmentsResolver],
  exports: [ShipmentsService],
})
export class ShipmentsModule {}
