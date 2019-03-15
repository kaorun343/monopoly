import {
  StreetColor,
  StreetProperty,
  calculateStreetAmount,
} from './StreetProperty'

describe('calculateStreetAmount()', () => {
  const info = new Map([[StreetColor.DarkBlue, 2], [StreetColor.LightBlue, 3]])

  describe('when not all streets of a specific color are owned', () => {
    it('should calculate the rental price of dark blue', () => {
      const ownedDarkBlue = [StreetProperty(StreetColor.DarkBlue, 35)]
      const [parkPlace] = ownedDarkBlue

      const price = calculateStreetAmount(ownedDarkBlue, parkPlace, info)
      expect(price).toBe(35)
    })

    it('should calclulate the rental price of light blue', () => {
      const ownedLightBlue = [
        StreetProperty(StreetColor.LightBlue, 6),
        StreetProperty(StreetColor.LightBlue, 6),
      ]
      const orientalAvenue = ownedLightBlue[0]

      const price = calculateStreetAmount(ownedLightBlue, orientalAvenue, info)
      expect(price).toBe(6)
    })
  })

  describe('when all streets of a specific colore are owned', () => {
    it('should calculate the rental price of dark blue', () => {
      const ownedDarkBlue = [
        StreetProperty(StreetColor.DarkBlue, 35),
        StreetProperty(StreetColor.DarkBlue, 50),
      ]
      const parkPlace = ownedDarkBlue[0]

      const price = calculateStreetAmount(ownedDarkBlue, parkPlace, info)
      expect(price).toBe(70)
    })

    it('should calculate the rental price of light blue', () => {
      const ownedLightBlue = [
        StreetProperty(StreetColor.LightBlue, 6),
        StreetProperty(StreetColor.LightBlue, 6),
        StreetProperty(StreetColor.LightBlue, 8),
      ]
      const orientalAvenue = ownedLightBlue[0]

      const price = calculateStreetAmount(ownedLightBlue, orientalAvenue, info)
      expect(price).toBe(12)
    })
  })
})
