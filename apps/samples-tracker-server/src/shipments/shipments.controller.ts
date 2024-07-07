import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ShipmentsService } from "./shipments.service";
import { ShipmentsControllerBase } from "./base/shipments.controller.base";

@swagger.ApiTags("shipments")
@common.Controller("shipments")
export class ShipmentsController extends ShipmentsControllerBase {
  constructor(protected readonly service: ShipmentsService) {
    super(service);
  }
}
