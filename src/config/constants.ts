import { EditorTabName } from '../Types/EditorTabName'
import { FilterTabName } from '../Types/FilterTabName'
import { TabType } from '../Types/TabType'
import { swatch, fileIcon, ai, logoShirt, stylishShirt } from '../assets'

export const EditorTabs: TabType[] = [
  {
    name: EditorTabName.ColorPicker,
    icon: swatch,
  },
  {
    name: EditorTabName.FilePicker,
    icon: fileIcon,
  },
  {
    name: EditorTabName.AiPicker,
    icon: ai,
  },
]

export const FilterTabs = [
  {
    name: FilterTabName.LogoShirt,
    icon: logoShirt,
  },
  {
    name: FilterTabName.StylishShirt,
    icon: stylishShirt,
  },
]

export const DecalTypes = {
  logo: {
    stateProperty: 'logoDecal',
    filterTab: 'logoShirt',
  },
  full: {
    stateProperty: 'fullDecal',
    filterTab: 'stylishShirt',
  },
}
