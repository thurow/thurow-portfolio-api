import { ProjectDocument, Project as ProjectInterface } from '@interfaces/Project'
import { Project } from '@models/Project'
import * as TechResolver from './resolvers/TechResolver'

export default {
  Query: {
    ...TechResolver.Query,
    listProjects: async (): Promise<ProjectInterface[]> => {
      try {
        const projects = await Project.find().lean()

        return projects
      } catch (err) {
        throw new Error(err)
      }
    },
    getProject: async (_: unknown, { id }: { id: ProjectDocument['_id'] }): Promise<ProjectInterface> => {
      try {
        const project = await Project.findById(id).lean()

        if (!project) {
          throw new Error('Project not Found!')
        }

        return project
      } catch (err) {
        throw new Error(err)
      }
    }
  },
  Mutation: {
    ...TechResolver.Mutation
  }
}
