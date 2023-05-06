import React from 'react'
import { TabType } from '../Types/TabType'
import { useSnapshot } from 'valtio'

import state from '../store'

interface ParentProps {
    tab: TabType
    handleClick: (e: any) => void
    isFilterTab?: boolean
    isActiveTab?: boolean
}

type Props = ParentProps

const Tab: React.FC<Props> = ({tab, handleClick, isFilterTab, isActiveTab}: Props): JSX.Element => {
  const snap = useSnapshot(state)


  const activeStyles = isFilterTab && isActiveTab 
    ? {backgroundColor: snap.color, opacity: 0.5} 
    : {backgroundColor: "transparent", opacity: 1}

  return (
    <div 
      key={tab.name}
      className={`tab-btn ${isFilterTab ? 'roundedd-full glassmorphism' : 'rounded-4'}`}
      onClick={handleClick}
      style={activeStyles}
      >
        <img 
          src={tab.icon}
        />
    </div>
  )
}

export default Tab