import { Player } from '../models/player/Player'

export type BoardRepository = {
  walk(player: Player): Promise<any>
  jump(player: Player, positon: number): Promise<any>
}
