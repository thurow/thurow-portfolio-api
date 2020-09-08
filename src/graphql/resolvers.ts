export default {
  Query: {
    hello: (_: unknown, { name }: { name: string }):string => `Hello ${name || 'World'}`,
    secured: (): string => 'Secured'
  }
}
