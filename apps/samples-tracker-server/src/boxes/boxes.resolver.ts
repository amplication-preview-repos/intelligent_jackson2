import * as graphql from "@nestjs/graphql";
import { BoxesResolverBase } from "./base/boxes.resolver.base";
import { Boxes } from "./base/Boxes";
import { BoxesService } from "./boxes.service";

@graphql.Resolver(() => Boxes)
export class BoxesResolver extends BoxesResolverBase {
  constructor(protected readonly service: BoxesService) {
    super(service);
  }
}
