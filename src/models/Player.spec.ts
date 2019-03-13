import { Player, recieveMoney, payMoney, bankrupt } from './Player'
import { Right, Left } from './utils/Either'

const player = Player('', 1500)

describe('recieveMoney()', () => {
  it('should update money property', () => {
    expect(recieveMoney(player, 200).money).toBe(1700)
    expect(player.money).toBe(1500)
  })
})

describe('payMoney()', () => {
  it('should return Right when the player can pay', () => {
    expect(payMoney(player, 1200)).toEqual(Right(Player('', 300)))
    expect(payMoney(player, 1500)).toEqual(Right(Player('', 0)))
    expect(player.money).toBe(1500)
  })

  it('should return Left when the player cannot pay', () => {
    expect(payMoney(player, 1501)).toEqual(Left(null))
  })
})

describe('bankrupt()', () => {
  it('should update the state', () => {
    expect(bankrupt(player).bankrupt).toBe(true)
  })
})
