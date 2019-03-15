import { CardList, drawCard } from './CardList'
import { Card } from './Card'
import { CardAction } from './CardAction'

describe('drawCard()', () => {
  describe('when the action of drawn card is GetOutOfJail', () => {
    const list = CardList([
      Card('', CardAction.GetOutOfJail),
      Card('', CardAction.MoveTo),
      Card('', CardAction.MoveToStation),
    ])

    it('should not modify the original list', () => {
      drawCard(list)
      expect(list).toHaveLength(3)
      expect(list[0].action).toBe(CardAction.GetOutOfJail)
    })

    it('should return the first card', () => {
      const [, card] = drawCard(list)
      expect(card.action).toBe(CardAction.GetOutOfJail)
    })

    it('should return the rest cards', () => {
      const [newList] = drawCard(list)
      expect(newList).toHaveLength(2)
    })
  })

  describe('when the action of drawn card is not GetOutOfJail', () => {
    const list = CardList([
      Card('', CardAction.MoveTo),
      Card('', CardAction.MoveToStation),
      Card('', CardAction.MoveToUtility),
    ])

    it('should not modify the original list', () => {
      drawCard(list)
      expect(list).toHaveLength(3)
      expect(list[0].action).toBe(CardAction.MoveTo)
    })

    it('should return the first card', () => {
      const [, card] = drawCard(list)
      expect(card.action).toBe(CardAction.MoveTo)
    })

    it('should set the drawn card to the last position of list', () => {
      const [newList, card] = drawCard(list)
      expect(newList[list.length - 1]).toBe(card)
    })
  })
})
