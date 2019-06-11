import { DiceGenerator } from '../interfaces/DiceGenerator'
import { Dice } from '../models/Dice'

export const diceGenerator: DiceGenerator = () => Dice(random(), random())

function random() {
  const max = 6
  const min = 1

  return Math.floor(Math.random() * (max + 1 - min)) + min
}
