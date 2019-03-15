import { Card } from './Card'
import { CardAction } from './CardAction'

export type CardList = ReadonlyArray<Card>

export function CardList(list: ReadonlyArray<Card>): CardList {
  return [...list]
}

/**
 * draw a card from the list
 * @param list the target list
 * @returns a new list and a drawn card as tuple
 */
export function drawCard(list: CardList): [CardList, Card] {
  const [head, ...tail] = list

  return head.action === CardAction.GetOutOfJail
    ? [tail, head]
    : [[...tail, head], head]
}
