/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Samples as PrismaSamples } from "@prisma/client";

export class SamplesServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.SamplesCountArgs, "select">): Promise<number> {
    return this.prisma.samples.count(args);
  }

  async samplesItems(
    args: Prisma.SamplesFindManyArgs
  ): Promise<PrismaSamples[]> {
    return this.prisma.samples.findMany(args);
  }
  async samples(
    args: Prisma.SamplesFindUniqueArgs
  ): Promise<PrismaSamples | null> {
    return this.prisma.samples.findUnique(args);
  }
  async createSamples(args: Prisma.SamplesCreateArgs): Promise<PrismaSamples> {
    return this.prisma.samples.create(args);
  }
  async updateSamples(args: Prisma.SamplesUpdateArgs): Promise<PrismaSamples> {
    return this.prisma.samples.update(args);
  }
  async deleteSamples(args: Prisma.SamplesDeleteArgs): Promise<PrismaSamples> {
    return this.prisma.samples.delete(args);
  }
}