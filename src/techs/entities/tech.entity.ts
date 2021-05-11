import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TechDocument = Tech & Document;

@ObjectType()
@Schema({ timestamps: true, collection: 'techs' })
export class Tech {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  @Prop({ type: String, required: true })
  name: string;
}

export const TechSchema = SchemaFactory.createForClass(Tech);
