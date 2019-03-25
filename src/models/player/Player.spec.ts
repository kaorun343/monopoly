import { Player, recieveMoney, payMoney, bankrupt } from './Player'
import { Ok, Err } from '../utils/Result'

const player = Player('', 1500)

function updateSymbol(p: Player): Player {
  return { ...p, symbol: player.symbol }
}

describe('recieveMoney()', () => {
  it('should update money property', () => {
    expect(recieveMoney(player, 200).money).toBe(1700)
  })

  it('should not modify the original value', () => {
    expect(player.money).toBe(1500)
  })
})

describe('payMoney()', () => {
  describe('when the player can play', () => {
    it('should return Right', () => {
      expect(payMoney(player, 1200)).toEqual(Ok(updateSymbol(Player('', 300))))
      expect(payMoney(player, 1500)).toEqual(Ok(updateSymbol(Player('', 0))))
    })

    it('should not modify the original value', () => {
      expect(player.money).toBe(1500)
    })
  })

  describe('when the player cannot pay', () => {
    it('should return Left', () => {
      expect(payMoney(player, 1501)).toEqual(Err(null))
    })
  })
})

describe('bankrupt()', () => {
  it('should update the state', () => {
    expect(bankrupt(player).bankrupt).toBe(true)
  })
})
