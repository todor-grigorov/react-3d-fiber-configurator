import React, { PropsWithChildren, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'
import { useSnapshot } from 'valtio'

import state from '../store'
import { Group } from 'three'

interface ParentProps {
}

type Props = ParentProps

const CameraRig: React.FC<Props> = ({ children }: PropsWithChildren<Props>): JSX.Element => {
  const group = useRef<Group | null>(null)
  const snap = useSnapshot(state)

  useFrame((state, delta) => {
    const isBreakpoint = window.innerWidth <= 1260
    const isMobile = window.innerWidth <= 600
    
    // set the model rotation smoothly
    if (!group.current) return
    easing.dampE(
      group.current.rotation,
      [state.pointer.y / 10, -state.pointer.x / 5, 0],
      0.25,
      delta
    )
  })

  return (
    <group ref={group}>{children}</group>
  )
}

export default CameraRig