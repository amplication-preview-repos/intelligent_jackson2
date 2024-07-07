import { Module } from "@nestjs/common";
import { BoxesModuleBase } from "./base/boxes.module.base";
import { BoxesService } from "./boxes.service";
import { BoxesController } from "./boxes.controller";
import { BoxesResolver } from "./boxes.resolver";

@Module({
  imports: [BoxesModuleBase],
  controllers: [BoxesController],
  providers: [BoxesService, BoxesResolver],
  exports: [BoxesService],
})
export class BoxesModule {}
