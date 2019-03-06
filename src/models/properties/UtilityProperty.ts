import { PropertyType } from './PropertyType'

export const enum Company {
  ElectricCompany,
  WaterWorks,
}

export interface UtilityProperty {
  readonly type: PropertyType.Utility
  readonly company: Company
}
