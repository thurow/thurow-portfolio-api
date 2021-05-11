import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateTechInput {
  @Field(() => String)
  name: string;
}
