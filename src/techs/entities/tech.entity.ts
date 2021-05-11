import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Tech {
  @Field(() => String)
  name: string;
}
