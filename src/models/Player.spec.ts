import { Player, recieveMoney, payMoney, bankrupt } from './Player'
import { Ok, Err } from './utils/Result'

const player = Player('', 1500)

function updateSymbol(p: Player): Player {
  return { ...p, symbol: player.symbol }
}

describe('recieveMoney()', () => {
  it('should update money property', () => {
    expect(recieveMoney(player, 200).money).toBe(1700)
    expect(player.money).toBe(1500)
  })
})

describe('payMoney()', () => {
  it('should return Right when the player can pay', () => {
    expect(payMoney(player, 1200)).toEqual(Ok(updateSymbol(Player('', 300))))
    expect(payMoney(player, 1500)).toEqual(Ok(updateSymbol(Player('', 0))))
    expect(player.money).toBe(1500)
  })

  it('should return Left when the player cannot pay', () => {
    expect(payMoney(player, 1501)).toEqual(Err(null))
  })
})

describe('bankrupt()', () => {
  it('should update the state', () => {
    expect(bankrupt(player).bankrupt).toBe(true)
  })
})
