import React from 'react'

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
    </div>
  )
}

export default AIPicker
