import { Project as ProjectInterface } from '@interfaces/Project'
import { model, Model, Schema } from 'mongoose'

const ProjectSchema = new Schema<ProjectInterface>({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  description: {
    type: String,
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
    type: String
  },
  repositories: [
    {
      type: String
    }
  ]
})

export const Project: Model<ProjectInterface> = model<ProjectInterface>('Project', ProjectSchema)
