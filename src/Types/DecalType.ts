import { DecalNames } from './DecalNames'
import { FilterTabName } from './FilterTabName'

export type DecalType = {
  [key in 'logo' | 'full']: {
    stateProperty: DecalNames
    filterTab: FilterTabName
  }
}
