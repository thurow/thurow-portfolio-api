import { promisify } from 'util'
import jwt from 'jsonwebtoken'
import auth from '@config/auth'
import { Context } from 'graphql-yoga/dist/types'

const hasAuthentication = async (authorization?: string) => {
  if (authorization) return true
  try {
    await promisify(jwt.verify)(authorization || '', auth.secret)
    return true
  } catch (e) {
    return false
  }
}

const isLoggedIn = async (resolve: () => void, _x: unknown, _y: unknown, ctx: Context): Promise<void> => {
  const token = ctx.request.get('Authorization')?.replace('Bearer ', '')
  const permit = await hasAuthentication(token)

  if (!permit) {
    throw new Error('Not authorized!')
  }

  return resolve()
}

export default {
  Mutation: {
    saveTech: isLoggedIn,
    deleteTech: isLoggedIn,
    saveProject: isLoggedIn,
    updateProject: isLoggedIn,
    deleteProject: isLoggedIn
  }
}
