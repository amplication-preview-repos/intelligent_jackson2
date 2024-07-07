import { Module } from "@nestjs/common";
import { SamplesModuleBase } from "./base/samples.module.base";
import { SamplesService } from "./samples.service";
import { SamplesController } from "./samples.controller";
import { SamplesResolver } from "./samples.resolver";

@Module({
  imports: [SamplesModuleBase],
  controllers: [SamplesController],
  providers: [SamplesService, SamplesResolver],
  exports: [SamplesService],
})
export class SamplesModule {}
