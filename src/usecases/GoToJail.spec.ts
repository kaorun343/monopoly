import { GoToJailUsecase } from './GoToJail'
import { Player } from '../models/player/Player'
import { BoardRepositoryMock } from '../__mocks__/BoardRepository'
import { PlayerRepositoryMock } from '../__mocks__/PlayerRepository'

describe(GoToJailUsecase, () => {
  // Initialize dependencies
  const playerRepository = new PlayerRepositoryMock()
  const boardRepository = new BoardRepositoryMock()
  const jailPosition = 30
  const player = Player('', 1500)

  // Execute usecase
  const usecase = GoToJailUsecase(
    playerRepository,
    boardRepository,
    jailPosition,
  )
  const response = usecase(player)

  test('player go to jail', async () => {
    await response
    expect(playerRepository.goToJail).toHaveBeenCalled()
    expect(boardRepository.jump).toHaveBeenCalled()
  })
})
