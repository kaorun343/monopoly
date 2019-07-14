import { Player } from '../models/player/Player'
import { Property } from '../models/properties'

export type BoardRepository = {
  current(player: Player): Promise<Property>
  walk(player: Player): Promise<any>
  jump(player: Player, positon: number): Promise<any>
}
