import React from 'react'

type ParentProps = {
  file: string
  setFile: React.Dispatch<React.SetStateAction<string>>
}

type Props = ParentProps

const FilePicker: React.FC<Props> = ({ file, setFile }: Props): JSX.Element => {
  return <div>FilePicker</div>
}

export default FilePicker
