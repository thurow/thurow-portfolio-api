import { Tech as TechInterface } from '@interfaces/Tech'
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
  saveTech: async (name: string): Promise<TechInterface> => {
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
  updateTech: async (id: number, name: string): Promise<TechInterface> => {
    try {
      if (!id || !name) {
        throw new Error('ID or Name cannot be empty!')
      }

      const updatedTech = await Tech.findByIdAndUpdate(id, { name }).lean()

      if (!updatedTech) {
        throw new Error(`Tech with id ${id} does not exists`)
      }

      return updatedTech
    } catch (err) {
      throw new Error(err)
    }
  },
  deleteTech: async (id: number): Promise<TechInterface> => {
    try {
      if (!id) {
        throw new Error('ID cannot be empty!')
      }

      const tech = await Tech.findByIdAndDelete(id).lean()

      if (!tech) {
        throw new Error(`Tech with id ${id} does not exists`)
      }

      return tech
    } catch (err) {
      throw new Error(err)
    }
  }
}
