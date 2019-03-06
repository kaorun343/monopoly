import { PropertyType } from './PropertyType'

export interface TaxProperty {
  readonly type: PropertyType.Tax
  readonly money: number
}
