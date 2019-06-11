import { Dice } from '../models/Dice'
import { Player } from '../models/player/Player'

export type DiceRepository = {
  set(player: Player, dice: Dice): void
  count(player: Player): number
}
