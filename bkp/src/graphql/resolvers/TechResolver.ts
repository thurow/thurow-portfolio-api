import { Tech as TechInterface, TechDocument } from '@interfaces/Tech'
import { Tech } from '@models/Tech'

export const Query = {
  listTechs: async (): Promise<TechInterface[]> => {
    try {
      const techs = await Tech.find().lean()

      return techs
    } catch (err) {
      throw new Error(err)
    }
  }
}

export const Mutation = {
  saveTech: async (name: string): Promise<TechDocument> => {
    try {
      if (name.length === 0) {
        throw new Error('Name cannot be empty!')
      }

      const tech = await Tech.create({ name })

      return tech
    } catch (err) {
      throw new Error(err)
    }
  },
  deleteTech: async (id: number): Promise<TechInterface> => {
    try {
      const tech = await Tech.findByIdAndDelete(id)

      if (!tech) {
        throw new Error(`Tech with id ${id} does not exists`)
      }

      return tech
    } catch (err) {
      throw new Error(err)
    }
  }
}
