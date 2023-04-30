import React from 'react'
import { TabType } from '../Types/TabType'

interface ParentProps {
    tab: TabType
    isFilterTab?: boolean
    isActiveTab?: boolean
    handleClick: (e: any) => void
}

type Props = ParentProps

const Tab: React.FC<Props> = ({tab, handleClick}): JSX.Element => {
  return (
    <div>Tab</div>
  )
}

export default Tab