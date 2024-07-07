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
import { SamplesWhereUniqueInput } from "./SamplesWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { SamplesUpdateInput } from "./SamplesUpdateInput";

@ArgsType()
class UpdateSamplesArgs {
  @ApiProperty({
    required: true,
    type: () => SamplesWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SamplesWhereUniqueInput)
  @Field(() => SamplesWhereUniqueInput, { nullable: false })
  where!: SamplesWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => SamplesUpdateInput,
  })
  @ValidateNested()
  @Type(() => SamplesUpdateInput)
  @Field(() => SamplesUpdateInput, { nullable: false })
  data!: SamplesUpdateInput;
}

export { UpdateSamplesArgs as UpdateSamplesArgs };