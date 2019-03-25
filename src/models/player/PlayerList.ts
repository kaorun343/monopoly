import { Player } from './Player'

export type PlayerList<P = Player> = ReadonlyArray<P>

export function PlayerList<P>(players: ReadonlyArray<P>): PlayerList<P> {
  return [...players]
}

export function updatePlayer<P>(list: PlayerList<P>, index: number, player: P) {
  const newList = list.slice()
  newList[index] = player
  return newList as PlayerList<P>
}

export function removePlayer<P>(list: PlayerList<P>, index: number) {
  const newList = list.slice()
  newList.splice(index, 1)
  return newList as PlayerList<P>
}
