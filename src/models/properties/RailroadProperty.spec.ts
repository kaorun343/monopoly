import { RailroadProperty, calculateRailroadAmount } from './RailroadProperty'

describe('calculateAmount()', () => {
  function initOwnedProperties(amount: number) {
    const result = []
    for (let i = 0; i < amount; i += 1) {
      result.push(RailroadProperty(''))
    }
    return result
  }

  it('should return 25 if 1 station is owned', () => {
    expect(calculateRailroadAmount(initOwnedProperties(1))).toStrictEqual(25)
  })

  it('should return 50 if 2 stations are owned', () => {
    expect(calculateRailroadAmount(initOwnedProperties(2))).toStrictEqual(50)
  })

  it('should return 100 if 3 stations are owned', () => {
    expect(calculateRailroadAmount(initOwnedProperties(3))).toStrictEqual(100)
  })

  it('should return 200 if 4 stations are owned', () => {
    expect(calculateRailroadAmount(initOwnedProperties(4))).toStrictEqual(200)
  })
})
