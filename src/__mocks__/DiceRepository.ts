import { DiceRepository } from '../interfaces/DiceRepository'

export class DiceRepositoryMock implements DiceRepository {
  set = jest.fn()
  count = jest.fn()
}
