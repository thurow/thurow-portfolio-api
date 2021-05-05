import { Tech } from '@models/Tech'
import { Mutation, Query } from './TechResolver'
import MongoMock from '../../mocks/MongoMock'
import { TechDocument } from '@interfaces/Tech'

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

  it('should be able to list techs', async () => {
    const tech1 = 'Tech 1'
    const tech2 = 'Tech 2'

    await Mutation.saveTech(tech1)
    await Mutation.saveTech(tech2)

    const techs = await Query.listTechs()

    expect(techs).toEqual([
      expect.objectContaining({
        name: tech1
      }),
      expect.objectContaining({
        name: tech2
      })
    ] as TechDocument[])
  })

  it('should throw an error when something go wrong', async () => {
    // jest.spyOn(Query, 'listTechs')
    //   .mockImplementationOnce(() => Promise.reject(new Error('Boo')))
    expect(Query.listTechs()).rejects.toThrow()
  })

  it('should be able to delete tech', async () => {
    await Mutation.saveTech('tech3')
    const techToDelete = await Mutation.saveTech('tech5')

    const techs = await Query.listTechs()

    expect(techs).toHaveLength(2)

    await Mutation.deleteTech(techToDelete._id)

    const newTechsQuery = await Query.listTechs()

    expect(newTechsQuery).toHaveLength(1)

    expect(newTechsQuery).toEqual([
      expect.objectContaining({
        name: 'tech3'
      })
    ])
  })
})
