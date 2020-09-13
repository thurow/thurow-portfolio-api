import { Document } from 'mongoose'

export type Tech = {
  name: string
}
export type TechDocument = Document & Tech
