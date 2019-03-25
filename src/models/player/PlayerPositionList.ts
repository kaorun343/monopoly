import { initMap, updateMap } from '../utils/Map'
import { PlayerPosition } from './PlayerPosition'

export type PlayerPositionList<P = symbol> = ReadonlyMap<P, PlayerPosition>

export function PositionList<P>(players: P[]): PlayerPositionList<P> {
  return initMap(players, PlayerPosition(0))
}

export function updatePosition<P>(
  list: PlayerPositionList<P>,
  player: P,
  position: PlayerPosition,
): PlayerPositionList<P> {
  return updateMap(list, player, position)
}
