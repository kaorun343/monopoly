import { Player } from '../models/player/Player'
import { isDouble, toPrimitiveValue } from '../models/Dice'
import { DiceGenerator } from '../interfaces/DiceGenerator'
import { DiceRepository } from '../interfaces/DiceRepository'
import { MovePlayerUsecase } from './MovePlayer'
import { GoToJailUsecase } from './GoToJail'

export type PlayerTurnUsecase = {
  (player: Player): Promise<any>
}

export function PlayerTurnUsecase(
  diceRepository: DiceRepository,
  diceGenerator: DiceGenerator,
  movePlayerUsecase: MovePlayerUsecase,
  goToJailUsecase: GoToJailUsecase,
): PlayerTurnUsecase {
  return async player => {
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

    // Check if the player can dice more one time or not
    if (isDouble(dice)) {
      const useccase = PlayerTurnUsecase(
        diceRepository,
        diceGenerator,
        movePlayerUsecase,
        goToJailUsecase,
      )
      return useccase(player)
    } else {
      return
    }
  }
}
