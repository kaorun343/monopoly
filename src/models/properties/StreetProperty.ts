import { PropertyType } from './PropertyType'

export const enum StreetColor {
  DarkPurple,
  LightBlue,
  LighPurple,
  Orange,
  Red,
  Yellow,
  Green,
  DarkBlue,
}

export type StreetColorInfo = ReadonlyMap<StreetColor, number>

export interface StreetProperty {
  readonly type: PropertyType.Street
  readonly color: StreetColor
  readonly rent: number
}

export function StreetProperty(
  color: StreetColor,
  rent: number,
): StreetProperty {
  return { type: PropertyType.Street, color, rent }
}

export function calculateStreetAmount(
  properties: ReadonlyArray<StreetProperty>,
  property: Readonly<StreetProperty>,
  info: StreetColorInfo,
) {
  const rent = property.rent
  return properties.length < info.get(property.color)! ? rent : rent * 2
}
