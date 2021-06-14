import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId, Schema as MongooseSchema } from 'mongoose';
import { Tech } from 'src/techs/entities/tech.entity';

export type ProjectDocument = Project & Document;

@ObjectType()
@Schema()
export class Project {
  @Field(() => ID)
  id: ObjectId;

  @Field(() => String)
  @Prop({ type: String, required: true })
  name: string;

  @Field(() => String)
  @Prop({ type: String, required: true })
  description: string;

  @Field(() => [Tech])
  @Prop({
    type: [{ type: MongooseSchema.Types.ObjectId, ref: 'Tech' }],
    required: true,
  })
  techs: Tech[];

  @Field(() => [String])
  @Prop({ type: [String], required: true })
  repositories: string[];

  @Field(() => String, { nullable: true })
  @Prop({ type: String })
  image?: string;

  @Field(() => String, { nullable: true })
  @Prop({ type: String })
  projectUrl?: string;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
