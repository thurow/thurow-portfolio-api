import { Project as ProjectInterface } from '@interfaces/Project'
import { model, Model, Schema } from 'mongoose'

const ProjectSchema = new Schema<ProjectInterface>({
  name: {
    type: Schema.Types.String,
    required: true
  },
  image: {
    type: Schema.Types.String
  },
  description: {
    type: Schema.Types.String,
    required: true
  },
  techs: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Tech',
      required: true
    }
  ],
  projectUrl: {
    type: Schema.Types.String
  },
  repositories: [
    {
      type: Schema.Types.String
    }
  ]
})

export const Project: Model<ProjectInterface> = model<ProjectInterface>('Project', ProjectSchema)
