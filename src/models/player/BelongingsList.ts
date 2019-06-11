import { Belongings } from './Belongings'
import { initMap, updateMap } from '../utils/Map'

export type BelongingsList<P = symbol> = ReadonlyMap<P, Belongings>

export function BelongingsList<P>(players: P[]): BelongingsList<P> {
  return initMap(players, () => Belongings())
}

export function updateBelongingsList<P>(
  list: BelongingsList<P>,
  player: P,
  belongings: Belongings,
) {
  return updateMap(list, player, belongings)
}
