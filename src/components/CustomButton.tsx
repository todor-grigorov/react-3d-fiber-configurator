import React, { MouseEventHandler } from 'react'

import state from '../store'
import { useSnapshot } from 'valtio'
import { color } from 'framer-motion'

interface ParentProps {
  type: string | 'filled'
  title: string
  customStyles?: string
  handleClick: (e: any) => void
}

type Props = ParentProps

const CustomButton: React.FC<Props> = ({
  type,
  title,
  customStyles,
  handleClick,
}: Props): JSX.Element => {
  const snap = useSnapshot(state)

  function generateStyle(type: string): React.CSSProperties | undefined {
    if (type === 'filled') {
      return {
        backgroundColor: snap.color,
        color: '#fff',
      }
    } else if (type === 'outline') {
      return {
        borderWidth: '1px',
        borderColor: snap.color,
        color: snap.color,
      }
    }
  }

  return (
    <button
      className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
      style={generateStyle(type)}
      onClick={handleClick}
    >
      {title}
    </button>
  )
}

export default CustomButton
