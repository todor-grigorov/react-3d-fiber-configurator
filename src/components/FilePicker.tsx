import React from 'react'

import CustomButton from './CustomButton'

type ParentProps = {
  file: File | undefined
  setFile: React.Dispatch<React.SetStateAction<File | undefined>>
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
      setFile(undefined)
      return
    }
    setFile(e.target.files[0])
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

        <p className="mt-2 text-grey-500 text-xs truncate">
          {file === undefined ? 'No file selected' : file.name}
        </p>
      </div>

      <div className="mt-4 flex fle-wrap gap-3">
        <CustomButton
          type="outline"
          title="Logo"
          handleClick={() => readFile('logo')}
          customStyles="text-xs"
        />
        <CustomButton
          type="filled"
          title="Full"
          handleClick={() => readFile('full')}
          customStyles="text-xs"
        />
      </div>
    </div>
  )
}

export default FilePicker
