import { Document } from 'mongoose'
import { Tech } from './Tech'

export interface Project extends Document {
  name: string
  image?: string
  description: string
  techs: Tech[]
  projectUrl?: string
  repositories: string[]
}
