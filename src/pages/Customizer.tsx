import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useSnapshot } from 'valtio'

import config from '../config/config'
import state from '../store'
import { download } from '../assets'
import { downloadCanvasToImage, reader } from '../config/helpers'
import { EditorTabs, FilterTabs, DecalTypes } from '../config/constants'
import { Direction, fadeAnimation, slideAnimation } from '../config/motion'
import {
  AIPicker,
  ColorPicker,
  CustomButton,
  FilePicker,
  Tab,
} from '../components'
import { EditorTabName } from '../Types/EditorTabName'
import { FilterTabName } from '../Types/FilterTabName'
import { DecalNames } from '../Types/DecalNames'

type ActiveFilterTabState = {
  logoShirt: boolean
  stylishShirt: boolean
}

const Customizer: React.FC = (): JSX.Element => {
  const snap = useSnapshot(state)

  const [file, setFile] = useState<File>()

  const [prompt, setPrompt] = useState<string>('')
  const [generatingImg, setGeneratingImg] = useState(false)

  const [activeEditorTab, setActiveEditorTab] = useState<
    EditorTabName | FilterTabName | null
  >(null)
  const [activeFilterTab, setActiveFilterTab] = useState<ActiveFilterTabState>({
    logoShirt: true,
    stylishShirt: false,
  })

  // show tab content depending on the activeTab
  const generateTabContent = () => {
    switch (activeEditorTab) {
      case EditorTabName.ColorPicker:
        return <ColorPicker />
      case EditorTabName.FilePicker:
        return <FilePicker file={file} setFile={setFile} readFile={readFile} />
      case EditorTabName.AiPicker:
        return (
          <AIPicker
          // prompt={prompt}
          // setPrompt={setPrompt}
          // generatingImg={generatingImg}
          // handleSubmit={handleSubmit}
          />
        )

      default:
        return null
    }
  }

  const handleSubmit = async (type: string) => {
    if (!prompt) return alert('Please enter a prompt')

    try {
    } catch (error) {
      alert(error)
    } finally {
      setGeneratingImg(false)
      setActiveEditorTab(null)
    }
  }

  const handleDecals = (type: 'logo' | 'full', result: DecalNames) => {
    const decalType = DecalTypes[type]

    state[decalType.stateProperty] = result

    if (!activeFilterTab[decalType.filterTab]) {
      handleActiveFilterTab(decalType.filterTab)
    }
  }

  const handleActiveFilterTab = (tabName: FilterTabName) => {
    switch (tabName) {
      case FilterTabName.LogoShirt:
        state.isLogoTexture = !activeFilterTab[tabName]
        break
      case FilterTabName.StylishShirt:
        state.isFullTexture = !activeFilterTab[tabName]
        break
      default:
        state.isLogoTexture = true
        state.isFullTexture = false
    }

    setActiveFilterTab((prevState) => {
      return {
        ...prevState,
        [tabName]: !prevState[tabName],
      }
    })
  }

  const readFile = (type: 'logo' | 'full') => {
    reader(file as any).then((result) => {
      handleDecals(type, result as DecalNames)
      setActiveEditorTab(null)
    })
  }

  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
          <motion.div
            key="custom"
            className="absolute top-0 left-0 z-10"
            {...slideAnimation(Direction.LEFT)}
          >
            <div className="flex items-center min-h-screen">
              <div className="editortabs-container tabs">
                {EditorTabs.map((tab) => (
                  <Tab
                    key={tab.name}
                    tab={tab}
                    handleClick={() => setActiveEditorTab(tab.name)}
                  />
                ))}

                {generateTabContent()}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute z-10 top-5 right-5"
            {...fadeAnimation}
          >
            <CustomButton
              type="filled"
              title="Go Back"
              handleClick={() => (state.intro = true)}
              customStyles="w-fit px-4 py-2.5 font-bold text-sm"
            />
          </motion.div>

          <motion.div
            className="filtertabs-container"
            {...slideAnimation(Direction.UP)}
          >
            {FilterTabs.map((tab) => (
              <Tab
                key={tab.name}
                tab={tab}
                isFilterTab
                isActiveTab={activeFilterTab[tab.name]}
                handleClick={() => handleActiveFilterTab(tab.name)}
              />
            ))}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default Customizer
