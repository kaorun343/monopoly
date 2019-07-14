import { PlayerRepository } from '../interfaces/PlayerRepository'

export class PlayerRepositoryMock implements PlayerRepository {
  goToJail = jest.fn()
}
