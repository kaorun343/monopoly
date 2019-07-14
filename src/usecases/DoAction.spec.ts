import { DoActionUsecase } from './DoAction'
import { BoardRepositoryMock } from '../__mocks__/BoardRepository'
import { PropertyType } from '../models/properties/PropertyType'
import { Player } from '../models/player/Player'
import { Dice } from '../models/Dice'

describe(DoActionUsecase, () => {
  test('player gets its current position', async () => {
    const boardRepostiory = new BoardRepositoryMock()
    boardRepostiory.current.mockResolvedValueOnce({
      type: PropertyType.FreeParking,
    })

    const usecase = DoActionUsecase(boardRepostiory)
    const player = Player('PLAYER_NAME', 1500)
    const dice = Dice(1, 1)
    await usecase(player, dice)

    const mockFn = boardRepostiory.current
    expect(mockFn).toHaveBeenCalled()
    expect(mockFn.mock.calls[0][0]).toBe(player)
  })
})
