import React from 'react'

import CustomButton from './CustomButton'

type ParentProps = {
  file: string
  setFile: React.Dispatch<React.SetStateAction<string>>
  readFile: (type: 'logo' | 'full') => void
}

type Props = ParentProps

const FilePicker: React.FC<Props> = ({
  file,
  setFile,
  readFile,
}: Props): JSX.Element => {
  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files === null) {
      setFile('')
      return
    }
    setFile(e.target.files[0].name)
  }

  return (
    <div className="filepicker-container">
      <div className="flex-1 flex flex-col">
        <input
          id="file-upload"
          type="file"
          accept="images/*"
          onChange={onFileChange}
        />
        <label htmlFor="file-upload" className="filepicker-label">
          Upload File
        </label>
      </div>
    </div>
  )
}

export default FilePicker
