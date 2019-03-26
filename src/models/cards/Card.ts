import { CardAction } from './CardAction'
import { MoveToCard } from './MoveToCard'
import { MoveToStationCard } from './MoveToStationCard'
import { MoveToUtilityCard } from './MoveToUtilityCard'
import { RecieveFromBankCard } from './RecieveFromBankCard'
import { PayToBankCard } from './PayToBankCard'
import { PayToPlayersCard } from './PayToPlayersCard'
import { PayRepairCostsCard } from './PayRepairCostsCard'
import { GetOutOfJailCard } from './GetOutOfJailCard'
import { GoToJailCard } from './GoToJailCard'
import { RecieveFromPlayerCard } from './RecieveFromPlayersCard'

export type Card =
  | MoveToCard
  | MoveToStationCard
  | MoveToUtilityCard
  | RecieveFromBankCard
  | PayToBankCard
  | PayToPlayersCard
  | PayRepairCostsCard
  | GetOutOfJailCard
  | GoToJailCard
  | RecieveFromPlayerCard

export function Card(text: string, action: CardAction): Card {
  return ({ text, action } as any) as Card
}
