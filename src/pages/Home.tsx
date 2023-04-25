import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSnapshot } from 'valtio'

import state from '../store'

import {
  Direction,
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion'

const Home: React.FC = (): JSX.Element => {
  const snap = useSnapshot(state)

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.div className="home" {...slideAnimation(Direction.LEFT)}>
            <motion.header>
              <img src="./threejs.png" alt="logo" className="w-8 h-8 object-contain" />
            </motion.header>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Home
