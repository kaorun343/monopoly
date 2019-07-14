import { Dice } from '../models/Dice'
import { Player } from '../models/player/Player'
import { BoardRepository } from '../interfaces/BoardRepository'

export type DoActionUsecase = {
  (player: Player, dice: Dice): Promise<any>
}

export function DoActionUsecase(
  boardRepository: BoardRepository,
): DoActionUsecase {
  return async (player, dice) => {
    const property = await boardRepository.current(player)

    // Do action based on the property
    switch (property.type) {
    }
  }
}
