import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ActionTypesService } from "./actionTypes.service";
import { ActionTypesControllerBase } from "./base/actionTypes.controller.base";

@swagger.ApiTags("actionTypes")
@common.Controller("actionTypes")
export class ActionTypesController extends ActionTypesControllerBase {
  constructor(protected readonly service: ActionTypesService) {
    super(service);
  }
}
