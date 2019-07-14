import { BoardRepository } from '../interfaces/BoardRepository'
import { Property } from '../models/properties'
import { Player } from '../models/player/Player'

export class BoardRepositoryMock implements BoardRepository {
  current = jest.fn<Promise<Property>, [Player]>()
  walk = jest.fn()
  jump = jest.fn()
}
