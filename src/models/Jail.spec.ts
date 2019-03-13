import { Jail, imprisonPrisoner, releasePrisoner } from './Jail'

describe('initJail()', () => {
  it('should init a Jail object', () => {
    const jail = Jail(Symbol(), Symbol(), Symbol(), Symbol())
    expect(jail.size).toBe(4)
  })
})

describe('imprisonPrisoner()', () => {
  it('should imprison a prisoner', () => {
    const jail = Jail(Symbol())

    const symbol = Symbol()
    expect(imprisonPrisoner(jail, symbol).has(symbol)).toBe(true)
    expect(jail.has(symbol)).toBe(false)
  })
})

describe('releasePrisoner()', () => {
  it('should release a prisoner', () => {
    const symbol = Symbol()
    const jail = Jail(symbol)

    expect(releasePrisoner(jail, symbol).has(symbol)).toBe(false)
    expect(jail.has(symbol)).toBe(true)
  })
})
