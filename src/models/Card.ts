export const enum CardType {
  Chance,
  CommunityChest,
}

export const enum CardAction {
  MoveTo,
  MoveToStation,
  MoveToUtility,
  RecieveFromBank,
  PayToBank,
  PayToPlayers,
  PayRepairCosts,
  GetOutOfJail,
  GoToJail,
  RecieveFromPlayers,
}

export interface Card {
  text: string
  type: CardType
}