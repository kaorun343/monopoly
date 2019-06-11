import { PurchasableProperty } from '../properties'
import { GetOutOfJailCard } from '../cards/GetOutOfJailCard'
import { addItem, deleteItem } from '../utils/Set'

export type Belongings = {
  properties: ReadonlySet<PurchasableProperty>
  cards: {
    chance: GetOutOfJailCard | null
    communityChest: GetOutOfJailCard | null
  }
}

export function Belongings(): Belongings {
  return {
    properties: new Set(),
    cards: {
      chance: null,
      communityChest: null,
    },
  }
}

function updateProperties(
  belongings: Belongings,
  properties: ReadonlySet<PurchasableProperty>,
): Belongings {
  return {
    properties,
    cards: belongings.cards,
  }
}

export function addProperty(
  belongings: Belongings,
  property: PurchasableProperty,
) {
  return updateProperties(belongings, addItem(belongings.properties, property))
}

export function deleteProperty(
  belongings: Belongings,
  property: PurchasableProperty,
) {
  return updateProperties(
    belongings,
    deleteItem(belongings.properties, property),
  )
}

function updateCards(
  belongings: Belongings,
  key: keyof Belongings['cards'],
  value: GetOutOfJailCard | null,
): Belongings {
  return {
    properties: belongings.properties,
    cards: {
      ...belongings.cards,
      [key]: value,
    },
  }
}

export function ownCard(
  belongings: Belongings,
  key: keyof Belongings['cards'],
  card: GetOutOfJailCard,
) {
  return updateCards(belongings, key, card)
}

export function releaseCard(
  belongings: Belongings,
  key: keyof Belongings['cards'],
): [Belongings, GetOutOfJailCard] {
  const card = belongings.cards[key]!
  return [updateCards(belongings, key, null), card]
}
