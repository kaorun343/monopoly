import { Dice, toPrimitiveValue } from '../Dice'
import { PROPERTY_AMOUNT } from '../../constants'

export type PlayerPosition = Branded<number, 'PlayerPosition'>

export function PlayerPosition(position: number) {
  return position as PlayerPosition
}

export function addDice(position: PlayerPosition, dice: Dice) {
  const destination = (position as number) + toPrimitiveValue(dice)

  return destination >= PROPERTY_AMOUNT
    ? ((destination - PROPERTY_AMOUNT) as PlayerPosition)
    : (destination as PlayerPosition)
}
