import {
  Company,
  initUtilityProperty,
  calculateUtilityAmount,
} from './UtilityProperty'

describe('calculateUtilityAmount()', () => {
  it('should return `dice` * 4 if 1 property is owned', () => {
    const properties = [initUtilityProperty(Company.ElectricCompany)]

    expect(calculateUtilityAmount(properties, 2)).toBe(4 * 2)
    expect(calculateUtilityAmount(properties, 11)).toBe(4 * 11)
  })

  it('should return `dice` * 4 if 2 properties are owned', () => {
    const properties = [
      initUtilityProperty(Company.ElectricCompany),
      initUtilityProperty(Company.WaterWorks),
    ]

    expect(calculateUtilityAmount(properties, 2)).toBe(10 * 2)
    expect(calculateUtilityAmount(properties, 11)).toBe(10 * 11)
  })
})
