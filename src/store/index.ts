import { proxy } from 'valtio'
import { DecalNames } from '../Types/DecalNames'

const state = proxy({
  intro: true,
  color: '#EFBD48',
  isLogoTexture: true,
  isFullTexture: false,
  [DecalNames.LogoDecal]: './threejs.png',
  [DecalNames.FullDecal]: './threejs.png',
})

export default state
