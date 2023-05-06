import { EditorTabName } from './EditorTabName'
import { FilterTabName } from './FilterTabName'

export type TabType = {
  name: EditorTabName | FilterTabName
  icon: string
}
