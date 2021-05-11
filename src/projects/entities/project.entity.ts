import { ObjectType, Field } from '@nestjs/graphql';
import { Tech } from 'src/techs/entities/tech.entity';

@ObjectType()
export class Project {
  @Field(() => String)
  name: string;

  @Field(() => String)
  description: string;

  @Field(() => [Tech])
  techs: Tech[];

  @Field(() => [String])
  repositories: string[];

  @Field(() => String, { nullable: true })
  image?: string;

  @Field(() => String, { nullable: true })
  projectUrl?: string;
}
