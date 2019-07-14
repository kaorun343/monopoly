import { MovePlayerUsecase } from './MovePlayer'
import { Player } from '../models/player/Player'
import { BoardRepositoryMock } from '../__mocks__/BoardRepository'

describe(MovePlayerUsecase, () => {
  const boardRepository = new BoardRepositoryMock()
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
