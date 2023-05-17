import React from 'react'

interface ParentProps {
  prompt: string
  setPrompt: React.Dispatch<React.SetStateAction<string>>
  generatingImg: boolean
}

type Props = ParentProps

const AIPicker: React.FC<Props> = ({
  prompt,
  setPrompt,
  generatingImg,
}: Props): JSX.Element => {
  return <div>AIPicker</div>
}

export default AIPicker
