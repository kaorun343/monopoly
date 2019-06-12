import { GoToJailUsecase } from './GoToJail'
import { Player } from '../models/player/Player'

describe(GoToJailUsecase, () => {
  // Initialize dependencies
  const playerRepository = {
    goToJail: jest.fn(),
  }
  const boardRepository = {
    walk: jest.fn(),
    jump: jest.fn(),
  }
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
