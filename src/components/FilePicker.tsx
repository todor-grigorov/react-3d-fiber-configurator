import React from 'react'

type ParentProps = {
  file: string
  setFile: React.Dispatch<React.SetStateAction<string>>
  readFile: (type: 'logo' | 'full') => void
}

type Props = ParentProps

const FilePicker: React.FC<Props> = ({ file, setFile }: Props): JSX.Element => {
  return <div>FilePicker</div>
}

export default FilePicker
