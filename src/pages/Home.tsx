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
import { CustomButton } from '../components'

const Home: React.FC = (): JSX.Element => {
  const snap = useSnapshot(state)

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.div className="home" {...slideAnimation(Direction.LEFT)}>
            <motion.header {...slideAnimation(Direction.DOWN)}>
              <img src="./threejs.png" alt="logo" className="w-8 h-8 object-contain" />
            </motion.header>

            <motion.div className="home-content" {...headContainerAnimation}>
              <motion.div {...headTextAnimation}>
                <h1 className="head-text">
                  LET'S <br className="xl:block hidden" /> DOI IT.
                </h1>
              </motion.div>

              <motion.div {...headContentAnimation} className="flex flex-col gap-5">
                <p className="max-w-md font-normal text-grey-600 text-base">
                  Create your unique and wxclusive shirt with our brand-new 3D customization tool. 
                  <strong>Unleash your imagination</strong>{" "}
                  and define your own style.
                </p>

                <CustomButton type="filled" title="Customize It" customStyles="w-fit px-4 py-2.5 font-bold text-sm" handleClick={() => state.intro = false} />
              </motion.div>
            </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Home
