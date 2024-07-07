import * as graphql from "@nestjs/graphql";
import { ActionTypesResolverBase } from "./base/actionTypes.resolver.base";
import { ActionTypes } from "./base/ActionTypes";
import { ActionTypesService } from "./actionTypes.service";

@graphql.Resolver(() => ActionTypes)
export class ActionTypesResolver extends ActionTypesResolverBase {
  constructor(protected readonly service: ActionTypesService) {
    super(service);
  }
}
