import { initMap, updateMap } from './utils/Map'

export type Jail<P = symbol> = ReadonlyMap<P, number>

/**
 * init a jail object
 * @param prisoners the prisoners to be imprisoned
 */
export function Jail<P>(...prisoners: P[]): Jail<P> {
  return initMap(prisoners, 0)
}

/**
 * imprison the prisoner to the jail
 * @param jail the target jail object
 * @param prisoner to be imprisoned
 */
export function imprisonPrisoner<P>(jail: Jail<P>, prisoner: P): Jail<P> {
  return updateMap(jail, prisoner, 0)
}

/**
 * release the prisoner form the jail
 * @param jail the target jail object
 * @param prisoner to be released
 */
export function releasePrisoner<P>(jail: Jail<P>, prisoner: P): Jail<P> {
  const newJail = new Map(jail)
  newJail.delete(prisoner)
  return newJail
}

/**
 * get the detention period
 * @param jail the target jail object
 * @param prisoner the target prisoner
 */
export function getDetentionPeriod<P>(jail: Jail<P>, prisoner: P): number {
  return jail.get(prisoner)!
}
