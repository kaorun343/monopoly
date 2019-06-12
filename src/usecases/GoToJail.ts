import { Player } from '../models/player/Player'
import { BoardRepository } from '../interfaces/BoardRepository'
import { PlayerRepository } from '../interfaces/PlayerRepository'

export type GoToJailUsecase = {
  (player: Player): Promise<any>
}

export function GoToJailUsecase(
  playerRepository: PlayerRepository,
  boardRepository: BoardRepository,
  jailPosition: number,
): GoToJailUsecase {
  return async player => {
    await playerRepository.goToJail(player)
    await boardRepository.jump(player, jailPosition)
  }
}
