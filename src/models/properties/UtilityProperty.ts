import { PropertyType } from './PropertyType'

export const enum Company {
  ElectricCompany,
  WaterWorks,
}

export type UtilityProperty = {
  readonly type: PropertyType.Utility
  readonly company: Company
}

export function UtilityProperty(company: Company): UtilityProperty {
  return { company, type: PropertyType.Utility }
}

export function calculateUtilityAmount(
  properties: ReadonlyArray<UtilityProperty>,
  dice: number,
) {
  return dice * (properties.length > 1 ? 10 : 4)
}
