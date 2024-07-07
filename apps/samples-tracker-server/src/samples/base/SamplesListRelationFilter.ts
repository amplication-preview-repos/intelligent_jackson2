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
import { SamplesWhereInput } from "./SamplesWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SamplesListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => SamplesWhereInput,
  })
  @ValidateNested()
  @Type(() => SamplesWhereInput)
  @IsOptional()
  @Field(() => SamplesWhereInput, {
    nullable: true,
  })
  every?: SamplesWhereInput;

  @ApiProperty({
    required: false,
    type: () => SamplesWhereInput,
  })
  @ValidateNested()
  @Type(() => SamplesWhereInput)
  @IsOptional()
  @Field(() => SamplesWhereInput, {
    nullable: true,
  })
  some?: SamplesWhereInput;

  @ApiProperty({
    required: false,
    type: () => SamplesWhereInput,
  })
  @ValidateNested()
  @Type(() => SamplesWhereInput)
  @IsOptional()
  @Field(() => SamplesWhereInput, {
    nullable: true,
  })
  none?: SamplesWhereInput;
}
export { SamplesListRelationFilter as SamplesListRelationFilter };
