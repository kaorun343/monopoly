import { CardAction } from './CardAction'

export type Card = {
  readonly text: string
  readonly action: CardAction
}

export function Card(text: string, action: CardAction): Card {
  return { text, action }
}
