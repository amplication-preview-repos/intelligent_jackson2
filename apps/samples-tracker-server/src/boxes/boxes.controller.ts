import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BoxesService } from "./boxes.service";
import { BoxesControllerBase } from "./base/boxes.controller.base";

@swagger.ApiTags("boxes")
@common.Controller("boxes")
export class BoxesController extends BoxesControllerBase {
  constructor(protected readonly service: BoxesService) {
    super(service);
  }
}
