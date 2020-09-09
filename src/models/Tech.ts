import { Tech as TechInterface } from '@interfaces/Tech'
import { model, Model, Schema } from 'mongoose'

const TechSchema = new Schema<TechInterface>({
  name: {
    type: Schema.Types.String,
    required: true
  }
})

export const Tech: Model<TechInterface> = model<TechInterface>('Tech', TechSchema)
