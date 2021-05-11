import { Field, ID, InputType, PartialType } from '@nestjs/graphql';
import { CreateTechInput } from './create-tech.input';

@InputType()
export class UpdateTechInput extends PartialType(CreateTechInput) {
  @Field(() => ID)
  id: string;
}
