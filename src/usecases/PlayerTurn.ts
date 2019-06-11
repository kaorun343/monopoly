import { Player } from '../models/player/Player'
import { isDouble } from '../models/Dice'
import { DiceGenerator } from '../interfaces/DiceGenerator'
import { DiceRepository } from '../interfaces/DiceRepository'

export type PlayerTurnUsecase = {
  (player: Player): any
}

export function PlayerTurnUsecase(
  diceRepository: DiceRepository,
  diceGenerator: DiceGenerator,
): PlayerTurnUsecase {
  return player => {
    const dice = diceGenerator()
    diceRepository.set(player, dice)

    // Check if the player must go to jail or not
    if (diceRepository.count(player) === 3) {
      // Go To Jail
      return
    }

    // Move player

    // Do action

    // Check if the player can dice more one time or not
    if (isDouble(dice)) {
      return PlayerTurnUsecase(diceRepository, diceGenerator)(player)
    } else {
      return
    }
  }
}
