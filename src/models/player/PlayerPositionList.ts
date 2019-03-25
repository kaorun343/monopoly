import { initMap, updateMap } from '../utils/Map'
import { PlayerPosition } from './PlayerPosition'

export type PositionList<P = symbol> = ReadonlyMap<P, PlayerPosition>

export function PositionList<P>(players: P[]): PositionList<P> {
  return initMap(players, PlayerPosition(0))
}

export function updatePosition<P>(
  list: PositionList<P>,
  player: P,
  position: PlayerPosition,
): PositionList<P> {
  return updateMap(list, player, position)
}
