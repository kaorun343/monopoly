import { Player } from '../models/player/Player'
import { isDouble, toPrimitiveValue } from '../models/Dice'
import { DiceGenerator } from '../interfaces/DiceGenerator'
import { DiceRepository } from '../interfaces/DiceRepository'
import { MovePlayerUsecase } from './MovePlayer'
import { GoToJailUsecase } from './GoToJail'
import { DoActionUsecase } from './DoAction'

export type PlayerTurnUsecase = {
  (player: Player, usecase: PlayerTurnUsecase): Promise<any>
}

export function PlayerTurnUsecase(
  diceRepository: DiceRepository,
  diceGenerator: DiceGenerator,
  movePlayerUsecase: MovePlayerUsecase,
  goToJailUsecase: GoToJailUsecase,
  doActionUsecase: DoActionUsecase,
): PlayerTurnUsecase {
  return async (player, usecase) => {
    // If player is in jail

    // dice
    const dice = diceGenerator()
    diceRepository.set(player, dice)

    // Check if the player must go to jail or not
    if (diceRepository.count(player) === 3) {
      // Go To Jail
      return goToJailUsecase(player)
    }

    // Move player
    await movePlayerUsecase(player, toPrimitiveValue(dice))

    // Do action
    await doActionUsecase(player, dice)

    // Check if the player can dice more one time or not
    if (isDouble(dice)) {
      return usecase(player, usecase)
    } else {
      return
    }
  }
}
