import { CreateProjectInput } from './create-project.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';
import { ObjectId } from 'mongoose';

@InputType()
export class UpdateProjectInput extends PartialType(CreateProjectInput) {
  @Field(() => ID)
  id: ObjectId;
}
