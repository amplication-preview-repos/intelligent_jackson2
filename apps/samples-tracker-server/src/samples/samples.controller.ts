import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SamplesService } from "./samples.service";
import { SamplesControllerBase } from "./base/samples.controller.base";

@swagger.ApiTags("samples")
@common.Controller("samples")
export class SamplesController extends SamplesControllerBase {
  constructor(protected readonly service: SamplesService) {
    super(service);
  }
}
