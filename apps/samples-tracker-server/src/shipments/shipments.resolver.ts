import * as graphql from "@nestjs/graphql";
import { ShipmentsResolverBase } from "./base/shipments.resolver.base";
import { Shipments } from "./base/Shipments";
import { ShipmentsService } from "./shipments.service";

@graphql.Resolver(() => Shipments)
export class ShipmentsResolver extends ShipmentsResolverBase {
  constructor(protected readonly service: ShipmentsService) {
    super(service);
  }
}
