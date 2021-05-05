import { TechDocument } from '@interfaces/Tech'
import { model, Schema } from 'mongoose'

const TechSchema = new Schema<TechDocument>({
  name: {
    type: Schema.Types.String,
    required: true
  }
})

export const Tech = model<TechDocument>('Tech', TechSchema)
