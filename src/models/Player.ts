import { Either, Right, Left } from './Either'

export type Player = {
  readonly name: string
  readonly money: number
  readonly arrested: boolean
}

export function Player(name: string, money: number): Player {
  return { name, money, arrested: false }
}

export function recieveMoney(player: Player, money: number): Player {
  return { ...player, money: player.money + money }
}

export function payMoney(player: Player, money: number): Either<Player, null> {
  const result = player.money - money
  return result >= 0 ? Right({ ...player, money: result }) : Left(null)
}
