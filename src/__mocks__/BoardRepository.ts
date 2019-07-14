import { BoardRepository } from '../interfaces/BoardRepository'

export class BoardRepositoryMock implements BoardRepository {
  walk = jest.fn()
  jump = jest.fn()
}
