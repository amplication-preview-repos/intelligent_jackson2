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
import { ActionTypesWhereInput } from "./ActionTypesWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ActionTypesOrderByInput } from "./ActionTypesOrderByInput";

@ArgsType()
class ActionTypesFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ActionTypesWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ActionTypesWhereInput, { nullable: true })
  @Type(() => ActionTypesWhereInput)
  where?: ActionTypesWhereInput;

  @ApiProperty({
    required: false,
    type: [ActionTypesOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ActionTypesOrderByInput], { nullable: true })
  @Type(() => ActionTypesOrderByInput)
  orderBy?: Array<ActionTypesOrderByInput>;

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

export { ActionTypesFindManyArgs as ActionTypesFindManyArgs };