import { ProjectDocument } from '@interfaces/Project'
import { model, Schema } from 'mongoose'

const ProjectSchema = new Schema<ProjectDocument>({
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

export const Project = model<ProjectDocument>('Project', ProjectSchema)
