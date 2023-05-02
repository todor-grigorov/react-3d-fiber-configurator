import React from 'react'
import * as THREE from 'three'
import { easing } from 'maath'
import { useSnapshot } from 'valtio'
import { useFrame } from '@react-three/fiber'
import { Decal, useGLTF, useTexture } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import state from '../store'


type GLTFResult = GLTF & {
  nodes: {
    T_Shirt_male: THREE.Mesh
  }
  materials: {
    lambert1: THREE.MeshStandardMaterial
  }
}


const Shirt = (props: JSX.IntrinsicElements['group']) => {
const snap = useSnapshot(state)
const { nodes, materials } = useGLTF('/shirt_baked.glb') as GLTFResult

const logoTexture = useTexture(snap.logoDecal)
const fullTexture = useTexture(snap.fullDecal)

  return (
    <group {...props} dispose={null}>
      <mesh castShadow geometry={nodes.T_Shirt_male.geometry} material={materials.lambert1} material-roghness={1} dispose={null} />
    </group>
  )
}

export default Shirt

useGLTF.preload('/shirt_baked.glb')