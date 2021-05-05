module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@models': './src/models',
        '@interfaces': './src/interfaces',
        '@graphql': './src/graphql',
        '@config': './src/config'
      }
    }]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}
