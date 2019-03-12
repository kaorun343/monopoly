import {
  StreetColor,
  StreetProperty,
  calculateStreetAmount,
} from './StreetProperty'

describe('calculateStreetAmount()', () => {
  const info = new Map([[StreetColor.DarkBlue, 2], [StreetColor.LightBlue, 3]])

  it('should calculate the rental money when not all streets of a specific color are owned', () => {
    const ownedDarkBlue = [StreetProperty(StreetColor.DarkBlue, 35)]
    const [parkPlace] = ownedDarkBlue
    expect(calculateStreetAmount(ownedDarkBlue, parkPlace, info)).toBe(35)

    const ownedLightBlue = [
      StreetProperty(StreetColor.LightBlue, 6),
      StreetProperty(StreetColor.LightBlue, 6),
    ]
    const orientalAvenue = ownedLightBlue[0]
    expect(calculateStreetAmount(ownedLightBlue, orientalAvenue, info)).toBe(6)
  })

  it('should calculate the rental money when all streets of a specific colore are owned', () => {
    const ownedDarkBlue = [
      StreetProperty(StreetColor.DarkBlue, 35),
      StreetProperty(StreetColor.DarkBlue, 50),
    ]
    const parkPlace = ownedDarkBlue[0]
    expect(calculateStreetAmount(ownedDarkBlue, parkPlace, info)).toBe(70)

    const ownedLightBlue = [
      StreetProperty(StreetColor.LightBlue, 6),
      StreetProperty(StreetColor.LightBlue, 6),
      StreetProperty(StreetColor.LightBlue, 8),
    ]
    const orientalAvenue = ownedLightBlue[0]
    expect(calculateStreetAmount(ownedLightBlue, orientalAvenue, info)).toBe(12)
  })
})
