import { Player } from './player'
import { PersonMapItem } from './statistics'

export type TopsBooleanData = {
  name: Player
} & Partial<PersonMapItem<boolean>>

export type TopsBooleanDataArr = Array<TopsBooleanData>
