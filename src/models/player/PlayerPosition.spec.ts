import { addDice, PlayerPosition, moveToDestination } from './PlayerPosition'
import { Dice } from '../Dice'
import { PROPERTY_AMOUNT } from '../../constants'

describe(addDice, () => {
  describe('when destination is before GO', () => {
    it('should return a new position', () => {
      expect(addDice(PlayerPosition(30), Dice(1, 1))).toBe(PlayerPosition(32))
    })
  })

  describe('when destination is GO', () => {
    it('should return a new position', () => {
      const start = PROPERTY_AMOUNT - 10
      expect(addDice(PlayerPosition(start), Dice(5, 5))).toBe(PlayerPosition(0))
    })
  })

  describe('when destination is after GO', () => {
    it('should return a new position', () => {
      const start = PROPERTY_AMOUNT - 10 + 2
      expect(addDice(PlayerPosition(start), Dice(5, 5))).toBe(PlayerPosition(2))
    })
  })
})

describe(moveToDestination, () => {
  describe('when destination is before GO', () => {
    it('should return routes', () => {
      const origin = PlayerPosition(1)
      const destination = PlayerPosition(5)
      expect(moveToDestination(origin, destination)).toEqual([2, 3, 4, 5])
    })
  })

  describe('when destination is GO', () => {
    it('should return routes', () => {
      const origin = PlayerPosition(38)
      const destination = PlayerPosition(0)
      expect(moveToDestination(origin, destination)).toEqual([39, 0])
    })
  })

  describe('when destination is after GO', () => {
    it('should return routes', () => {
      const origin = PlayerPosition(38)
      const destination = PlayerPosition(2)
      expect(moveToDestination(origin, destination)).toEqual([39, 0, 1, 2])
    })
  })
})
