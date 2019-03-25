import { Dice, toPrimitiveValue } from '../Dice'
import { PROPERTY_AMOUNT } from '../../constants'

export type PlayerPosition = Branded<number, 'PlayerPosition'>

export function PlayerPosition(position: number) {
  return position as PlayerPosition
}

function mod(position: number) {
  return position % PROPERTY_AMOUNT
}

export function addDice(position: PlayerPosition, dice: Dice) {
  const destination = (position as number) + toPrimitiveValue(dice)

  return mod(destination) as PlayerPosition
}

export function moveToDestination(
  origin: PlayerPosition,
  destination: PlayerPosition,
): PlayerPosition[] {
  const result = []
  let position = origin as number

  while (position !== (destination as number)) {
    position = mod(position + 1)
    result.push(position as PlayerPosition)
  }

  return result
}
