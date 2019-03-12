import { PropertyType } from './PropertyType'

export interface RailroadProperty {
  readonly title: string
  readonly type: PropertyType.Railroad
}

export function RailroadProperty(title: string): RailroadProperty {
  return { title, type: PropertyType.Railroad }
}

export function calculateRailroadAmount(
  properties: ReadonlyArray<RailroadProperty>,
) {
  const count = properties.length
  return 25 * 2 ** (count - 1)
}
