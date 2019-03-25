import { Result, Ok, Err } from '../utils/Result'

export type Player = {
  readonly symbol: symbol
  readonly name: string
  readonly money: number
  readonly bankrupt: boolean
  readonly arrested: boolean
}

export function Player(name: string, money: number): Player {
  return {
    symbol: Symbol(name),
    name,
    money,
    bankrupt: false,
    arrested: false,
  }
}

export function recieveMoney(player: Player, money: number): Player {
  return { ...player, money: player.money + money }
}

export function payMoney(player: Player, money: number): Result<Player, null> {
  const result = player.money - money
  return result >= 0 ? Ok({ ...player, money: result }) : Err(null)
}

export function bankrupt(player: Player): Player {
  return { ...player, bankrupt: true }
}
