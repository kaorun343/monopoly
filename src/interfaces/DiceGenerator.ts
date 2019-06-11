import { Dice } from '../models/Dice'

export type DiceGenerator = {
  (): Dice
}
