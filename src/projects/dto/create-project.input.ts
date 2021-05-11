import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateProjectInput {
  @Field(() => String)
  name: string;

  @Field(() => String)
  description: string;

  @Field(() => [ID])
  techs: string[];

  @Field(() => [String])
  repositories: string[];

  @Field(() => String, { nullable: true })
  image?: string;

  @Field(() => String, { nullable: true })
  projectUrl?: string;
}
