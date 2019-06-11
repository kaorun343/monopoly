import {
  Belongings,
  addProperty,
  deleteProperty,
  ownCard,
  releaseCard,
} from './Belongings'
import { GetOutOfJailCard } from '../cards/GetOutOfJailCard'
import { CardAction } from '../cards/CardAction'
import { UtilityProperty, Company } from '../properties/UtilityProperty'

describe(addProperty, () => {
  it('should add property', () => {
    const property = UtilityProperty(Company.WaterWorks)
    const belongings = Belongings()

    const { properties } = addProperty(belongings, property)
    expect(properties.has(property)).toBeTruthy()
  })
})

describe(deleteProperty, () => {
  it('should delete property', () => {
    const property = UtilityProperty(Company.WaterWorks)
    const belongings = addProperty(Belongings(), property)

    const { properties } = deleteProperty(belongings, property)
    expect(properties.has(property)).toBeFalsy()
  })
})

describe(ownCard, () => {
  it('should own card', () => {
    const card: GetOutOfJailCard = { action: CardAction.GetOutOfJail, text: '' }
    const belongings = Belongings()
    expect(ownCard(belongings, 'chance', card).cards.chance).toBe(card)
  })
})

describe(releaseCard, () => {
  it('should release card', () => {
    const card: GetOutOfJailCard = { action: CardAction.GetOutOfJail, text: '' }
    const belongings = ownCard(Belongings(), 'communityChest', card)

    const result = releaseCard(belongings, 'communityChest')
    expect(result[0].cards.communityChest).toBeNull()
    expect(result[1]).toBe(card)
  })
})
