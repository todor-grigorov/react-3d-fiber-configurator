import React from 'react'
import CustomButton from './CustomButton'

interface ParentProps {
  prompt: string
  setPrompt: React.Dispatch<React.SetStateAction<string>>
  generatingImg: boolean
  handleSubmit: (type: string) => void
}

type Props = ParentProps

const AIPicker: React.FC<Props> = ({
  prompt,
  setPrompt,
  generatingImg,
  handleSubmit,
}: Props): JSX.Element => {
  return (
    <div className="aipicker-container">
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        name="prompt"
        className="aipicker-textarea"
        id="aipicker-textarea"
        cols={30}
        rows={5}
      />
      <div className="flex flex-wrap gap-3">
        {generatingImg ? (
          <CustomButton
            type="outline"
            title="Asking AI..."
            customStyles="text-xs"
          />
        ) : (
          <>
            <CustomButton
              type="outline"
              title="AI Logo"
              handleClick={() => handleSubmit('logo')}
              customStyles="text-xs"
            />
            <CustomButton
              type="filled"
              title="AI Full"
              handleClick={() => handleSubmit('full')}
              customStyles="text-xs"
            />
          </>
        )}
      </div>
    </div>
  )
}

export default AIPicker
