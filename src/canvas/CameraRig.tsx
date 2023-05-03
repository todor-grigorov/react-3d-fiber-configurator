import React, { PropsWithChildren } from 'react'
import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'
import { useSnapshot } from 'valtio'

import state from '../store'

interface ParentProps {
}

type Props = ParentProps

const CameraRig: React.FC<Props> = ({ children }: PropsWithChildren<Props>): JSX.Element => {
  return (
    <group>{children}</group>
  )
}

export default CameraRig