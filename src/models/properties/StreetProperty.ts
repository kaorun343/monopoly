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

export interface StreetProperty {
  readonly type: PropertyType.Street
  readonly color: StreetColor
}
