import { PlayerTurnUsecase } from './PlayerTurn'
import { Player } from '../models/player/Player'

describe(PlayerTurnUsecase, () => {
  const player = Player('', 1500)

  describe('when dice is not double', () => {
    // Initialize dependencies
    const diceGenerator = jest.fn().mockReturnValue([1, 2])
    const diceRepository = {
      set: jest.fn(),
      count: jest.fn().mockReturnValueOnce(0),
    }
    const boardRepository = {
      walk: jest.fn(),
      jump: jest.fn(),
    }
    const goToJailUsecase = jest.fn()

    // Execute usecase
    const usecase = PlayerTurnUsecase(
      diceRepository,
      diceGenerator,
      boardRepository,
      goToJailUsecase,
    )
    const response = usecase(player)

    test('dice is called once', async () => {
      await response
      expect(diceGenerator).toHaveBeenCalledTimes(1)
    })

    test('player walks correct distance', async () => {
      await response
      expect(boardRepository.walk).toHaveBeenCalledTimes(3)
    })
  })

  describe('when dice is double', () => {
    // Initialize dependencies
    const diceGenerator = jest.fn().mockReturnValue([2, 2])
    const diceRepository = {
      set: jest.fn(),
      count: jest
        .fn()
        .mockReturnValueOnce(1)
        .mockReturnValueOnce(2)
        .mockReturnValueOnce(3),
    }
    const boardRepository = {
      walk: jest.fn(),
      jump: jest.fn(),
    }
    const goToJailUsecase = jest.fn()

    // Initialize dependencies
    const usecase = PlayerTurnUsecase(
      diceRepository,
      diceGenerator,
      boardRepository,
      goToJailUsecase,
    )
    const response = usecase(player)

    test('dice is called 3 times', async () => {
      await response
      expect(diceGenerator).toHaveBeenCalledTimes(3)
    })

    test('player walks only 2 times', async () => {
      await response
      expect(boardRepository.walk).toHaveBeenCalledTimes(4 * 2)
    })

    test('player go to jail', async () => {
      await response
      expect(goToJailUsecase).toHaveBeenCalledTimes(1)
    })
  })
})
