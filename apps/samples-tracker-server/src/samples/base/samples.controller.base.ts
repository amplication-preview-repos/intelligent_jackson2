/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { SamplesService } from "../samples.service";
import { SamplesCreateInput } from "./SamplesCreateInput";
import { Samples } from "./Samples";
import { SamplesFindManyArgs } from "./SamplesFindManyArgs";
import { SamplesWhereUniqueInput } from "./SamplesWhereUniqueInput";
import { SamplesUpdateInput } from "./SamplesUpdateInput";

export class SamplesControllerBase {
  constructor(protected readonly service: SamplesService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Samples })
  async createSamples(
    @common.Body() data: SamplesCreateInput
  ): Promise<Samples> {
    return await this.service.createSamples({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        barcode: true,
        typeField: true,
        status: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Samples] })
  @ApiNestedQuery(SamplesFindManyArgs)
  async samplesItems(@common.Req() request: Request): Promise<Samples[]> {
    const args = plainToClass(SamplesFindManyArgs, request.query);
    return this.service.samplesItems({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        barcode: true,
        typeField: true,
        status: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Samples })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async samples(
    @common.Param() params: SamplesWhereUniqueInput
  ): Promise<Samples | null> {
    const result = await this.service.samples({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        barcode: true,
        typeField: true,
        status: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Samples })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateSamples(
    @common.Param() params: SamplesWhereUniqueInput,
    @common.Body() data: SamplesUpdateInput
  ): Promise<Samples | null> {
    try {
      return await this.service.updateSamples({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          barcode: true,
          typeField: true,
          status: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Samples })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteSamples(
    @common.Param() params: SamplesWhereUniqueInput
  ): Promise<Samples | null> {
    try {
      return await this.service.deleteSamples({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          barcode: true,
          typeField: true,
          status: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
