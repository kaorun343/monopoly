import { PropertyType } from './PropertyType'

export type TaxProperty = {
  readonly type: PropertyType.Tax
  readonly money: number
}
