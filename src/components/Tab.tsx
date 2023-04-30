import React from 'react'

interface ParentProps {
    tab: TabType
    handleClick: (e: any) => void
}

type Props = ParentProps

const Tab: React.FC<Props> = ({tab, handleClick}): JSX.Element => {
  return (
    <div>Tab</div>
  )
}

export default Tab