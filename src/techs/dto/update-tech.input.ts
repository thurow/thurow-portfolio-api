import { Field, ID, InputType, PartialType } from '@nestjs/graphql';
import { ObjectId } from 'mongoose';
import { CreateTechInput } from './create-tech.input';

@InputType()
export class UpdateTechInput extends PartialType(CreateTechInput) {
  @Field(() => ID)
  id: ObjectId;
}
