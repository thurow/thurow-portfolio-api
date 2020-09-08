import { GraphQLServer, Options } from 'graphql-yoga'
import resolvers from '@graphql/resolvers'
import 'dotenv/config'
import permission from '@graphql/permission'

const serverOptions: Options = {
  port: process.env.PORT || 5000,
  cors: {
    credentials: true,
    origin: '*' // update after with frontend url
  },
  endpoint: '/graphql',
  playground: '/playground'
}

const server = new GraphQLServer(
  {
    typeDefs: `${__dirname}/graphql/schema.graphql`,
    resolvers,
    context: params => ({
      ...params
    }),
    middlewares: [permission]
  }
)

server.start(serverOptions, () => console.log(`Server is running on localhost:${serverOptions.port}`))
