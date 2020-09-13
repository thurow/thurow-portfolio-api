import { Tech } from '@models/Tech'
import { Mutation, Query } from './TechResolver'
import MongoMock from '../../mocks/MongoMock'

describe('TechResolver', () => {
  beforeAll(async () => {
    await MongoMock.connect()
  })

  afterAll(async () => {
    await MongoMock.disconnect()
  })

  beforeEach(async () => {
    await Tech.deleteMany({})
  })

  it('should be able to create new tech', async () => {
    const name = 'ReactJs'

    const tech = await Mutation.saveTech(name)

    expect(tech).toBeTruthy()
  })

  it('should not be able to create new tech without passing a valid string', async () => {
    try {
      await Mutation.saveTech('')
    } catch (e) {
      expect(e.message).toBe('Error: Name cannot be empty!')
    }
  })
})
