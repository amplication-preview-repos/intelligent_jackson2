/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TrackingEventWhereInput } from "./TrackingEventWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { TrackingEventOrderByInput } from "./TrackingEventOrderByInput";

@ArgsType()
class TrackingEventFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => TrackingEventWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => TrackingEventWhereInput, { nullable: true })
  @Type(() => TrackingEventWhereInput)
  where?: TrackingEventWhereInput;

  @ApiProperty({
    required: false,
    type: [TrackingEventOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [TrackingEventOrderByInput], { nullable: true })
  @Type(() => TrackingEventOrderByInput)
  orderBy?: Array<TrackingEventOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { TrackingEventFindManyArgs as TrackingEventFindManyArgs };