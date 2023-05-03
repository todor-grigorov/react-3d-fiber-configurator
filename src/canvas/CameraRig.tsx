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

  return (
    <group ref={group}>{children}</group>
  )
}

export default CameraRig