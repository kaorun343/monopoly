import { initJail, imprisonPrisoner, releasePrisoner } from './Jail'

describe('initJail()', () => {
  it('should init a Jail object', () => {
    const jail = initJail(0, 1, 2, 3)
    expect(jail.size).toBe(4)
  })
})

describe('imprisonPrisoner()', () => {
  it('should imprison a prisoner', () => {
    const jail = initJail(0)
    expect(imprisonPrisoner(jail, 30).has(30)).toBeTruthy()
    expect(jail.has(30)).toBeFalsy()
  })
})

describe('releasePrisoner()', () => {
  it('should release a prisoner', () => {
    const jail = initJail(0)
    expect(releasePrisoner(jail, 0).has(0)).toBeFalsy()
    expect(jail.has(0)).toBeTruthy()
  })
})
