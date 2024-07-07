import * as graphql from "@nestjs/graphql";
import { SamplesResolverBase } from "./base/samples.resolver.base";
import { Samples } from "./base/Samples";
import { SamplesService } from "./samples.service";

@graphql.Resolver(() => Samples)
export class SamplesResolver extends SamplesResolverBase {
  constructor(protected readonly service: SamplesService) {
    super(service);
  }
}
