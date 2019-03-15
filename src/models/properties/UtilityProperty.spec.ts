import {
  Company,
  UtilityProperty,
  calculateUtilityAmount,
} from './UtilityProperty'

describe('calculateUtilityAmount()', () => {
  describe('when 1 utility property is owned', () => {
    it('should return `dice` * 4', () => {
      const properties = [UtilityProperty(Company.ElectricCompany)]

      expect(calculateUtilityAmount(properties, 3)).toBe(4 * 3)
    })
  })

  describe('when 2 utility properties are owned', () => {
    it('should return `dice` * 10', () => {
      const properties = [
        UtilityProperty(Company.ElectricCompany),
        UtilityProperty(Company.WaterWorks),
      ]

      expect(calculateUtilityAmount(properties, 3)).toBe(10 * 3)
    })
  })
})
