import { MovePlayerUsecase } from './MovePlayer'
import { Player } from '../models/player/Player'

describe(MovePlayerUsecase, () => {
  const boardRepository = {
    walk: jest.fn(),
    jump: jest.fn(),
  }

  const usecase = MovePlayerUsecase(boardRepository)

  const player = Player('', 1500)
  const distance = 10
  const response = usecase(player, distance)

  test('player move the distance', async () => {
    await response
    expect(boardRepository.walk).toHaveBeenCalledTimes(10)
    expect(boardRepository.jump).not.toHaveBeenCalled()
  })
})
