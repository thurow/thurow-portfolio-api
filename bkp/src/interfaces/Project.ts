import { Document } from 'mongoose'
import { Tech } from './Tech'

export type Project = {
  name: string
  image?: string
  description: string
  techs: Tech[]
  projectUrl?: string
  repositories: string[]
}

export type ProjectDocument = Project & Document
