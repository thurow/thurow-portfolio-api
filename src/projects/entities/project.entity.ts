import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Project {
  @Field(() => String)
  name: string;

  @Field(() => String)
  description: string;

  @Field(() => [String])
  techs: string[]; //Tech[]

  @Field(() => [String])
  repositories: string[];

  @Field(() => String, { nullable: true })
  image?: string;

  @Field(() => String, { nullable: true })
  projectUrl?: string;
}
