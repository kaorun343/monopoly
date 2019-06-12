import { Player } from '../models/player/Player'
import { BoardRepository } from '../interfaces/BoardRepository'

export type MovePlayerUsecase = {
  (player: Player, distance: number): Promise<any>
}

export function MovePlayerUsecase(
  boardRepository: BoardRepository,
): MovePlayerUsecase {
  return async (player, distance) => {
    for (let i = 0; i < distance; i += 1) {
      await boardRepository.walk(player)
    }
  }
}
