const { compilerOptions } = require('./tsconfig.json')
const { pathsToModuleNameMapper } = require('ts-jest/utils')

module.exports = {
  clearMocks: true,
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>' }),
  preset: '@shelf/jest-mongodb',
  testEnvironment: "node",
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/**/*.d.ts',
    '!src/server.ts',
    '!src/config/*',
    '!src/mocks/**/*.ts',
    '!**/node_modules/**'
  ]
};
