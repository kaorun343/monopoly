type dice = number

export type Dice = [dice, dice]

const diceNumberList = new Set([1, 2, 3, 4, 5, 6])

export function isValidDiceNumber(i: number): i is dice {
  return diceNumberList.has(i)
}

export function Dice(a: dice, b: dice): Dice {
  return [a, b]
}

export function isDouble(dice: Dice) {
  return dice[0] === dice[1]
}

export function toPrimitiveValue(dice: Dice) {
  return dice[0] + dice[1]
}
