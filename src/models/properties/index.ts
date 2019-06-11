import { StreetProperty } from './StreetProperty'
import { UtilityProperty } from './UtilityProperty'
import { RailroadProperty } from './RailroadProperty'
import { CardProperty } from './CardProperty'
import { TaxProperty } from './TaxProperty'
import { FreeParkingProperty } from './FreeParkingProperty'
import { JailProperty } from './JailProperty'
import { GoToJailProperty } from './GoToJailProperty'

export type Property =
  | StreetProperty
  | UtilityProperty
  | RailroadProperty
  | CardProperty
  | TaxProperty
  | FreeParkingProperty
  | JailProperty
  | GoToJailProperty

export type PurchasableProperty =
  | StreetProperty
  | UtilityProperty
  | RailroadProperty
