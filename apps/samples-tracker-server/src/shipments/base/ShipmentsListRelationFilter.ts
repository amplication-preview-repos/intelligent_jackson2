/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ShipmentsWhereInput } from "./ShipmentsWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ShipmentsListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ShipmentsWhereInput,
  })
  @ValidateNested()
  @Type(() => ShipmentsWhereInput)
  @IsOptional()
  @Field(() => ShipmentsWhereInput, {
    nullable: true,
  })
  every?: ShipmentsWhereInput;

  @ApiProperty({
    required: false,
    type: () => ShipmentsWhereInput,
  })
  @ValidateNested()
  @Type(() => ShipmentsWhereInput)
  @IsOptional()
  @Field(() => ShipmentsWhereInput, {
    nullable: true,
  })
  some?: ShipmentsWhereInput;

  @ApiProperty({
    required: false,
    type: () => ShipmentsWhereInput,
  })
  @ValidateNested()
  @Type(() => ShipmentsWhereInput)
  @IsOptional()
  @Field(() => ShipmentsWhereInput, {
    nullable: true,
  })
  none?: ShipmentsWhereInput;
}
export { ShipmentsListRelationFilter as ShipmentsListRelationFilter };
