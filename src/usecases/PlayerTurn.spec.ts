import { PlayerTurnUsecase } from './PlayerTurn'
import { Player } from '../models/player/Player'

describe(PlayerTurnUsecase, () => {
  const player = Player('', 1500)

  describe('when dice is not double', () => {
    const diceGenerator = jest.fn().mockReturnValue([1, 2])
    const diceRepository = {
      set: jest.fn(),
      count: jest.fn().mockReturnValueOnce(0),
    }

    const usecase = PlayerTurnUsecase(diceRepository, diceGenerator)
    usecase(player)

    test('dice is called once', () => {
      expect(diceGenerator).toHaveBeenCalledTimes(1)
    })
  })

  describe('when dice is double', () => {
    const diceGenerator = jest.fn().mockReturnValue([2, 2])
    const diceRepository = {
      set: jest.fn(),
      count: jest
        .fn()
        .mockReturnValueOnce(1)
        .mockReturnValueOnce(2)
        .mockReturnValueOnce(3),
    }

    const usecase = PlayerTurnUsecase(diceRepository, diceGenerator)
    usecase(player)

    test('dice is called 3 times', () => {
      expect(diceGenerator).toHaveBeenCalledTimes(3)
    })
  })
})
