import { Player } from '../models/player/Player'
import { isDouble, toPrimitiveValue } from '../models/Dice'
import { DiceGenerator } from '../interfaces/DiceGenerator'
import { DiceRepository } from '../interfaces/DiceRepository'
import { BoardRepository } from '../interfaces/BoardRepository'

export type PlayerTurnUsecase = {
  (player: Player): Promise<any>
}

export function PlayerTurnUsecase(
  diceRepository: DiceRepository,
  diceGenerator: DiceGenerator,
  boardRepository: BoardRepository,
): PlayerTurnUsecase {
  return async player => {
    const dice = diceGenerator()
    diceRepository.set(player, dice)

    // Check if the player must go to jail or not
    if (diceRepository.count(player) === 3) {
      // Go To Jail
      return
    }

    // Move player
    for (let i = 0, distance = toPrimitiveValue(dice); i < distance; i += 1) {
      await boardRepository.walk(player)
    }

    // Do action

    // Check if the player can dice more one time or not
    if (isDouble(dice)) {
      const useccase = PlayerTurnUsecase(
        diceRepository,
        diceGenerator,
        boardRepository,
      )
      return useccase(player)
    } else {
      return
    }
  }
}
