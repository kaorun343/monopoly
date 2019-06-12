import { Player } from '../models/player/Player'

export type PlayerRepository = {
  goToJail(player: Player): Promise<void>
}
