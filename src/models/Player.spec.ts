import { Player, recieveMoney, payMoney } from './Player'
import { Right, Left } from './utils/Either'

describe('recieveMoney()', () => {
  it('should update money property', () => {
    const player = Player('', 1500)

    expect(recieveMoney(player, 200).money).toBe(1700)
    expect(player.money).toBe(1500)
  })
})

describe('payMoney()', () => {
  const player = Player('', 1500)

  it('should return Right when the player can pay', () => {
    expect(payMoney(player, 1200)).toEqual(Right(Player('', 300)))
    expect(payMoney(player, 1500)).toEqual(Right(Player('', 0)))
    expect(player.money).toBe(1500)
  })

  it('should return Left when the player cannot pay', () => {
    expect(payMoney(player, 1501)).toEqual(Left(null))
  })
})
