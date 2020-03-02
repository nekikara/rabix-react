import React from 'react'
import { remote, OpenDialogOptions, OpenDialogReturnValue } from 'electron'

function openDialog(
  options: Electron.OpenDialogOptions = {}
): Promise<OpenDialogReturnValue> {
  const { dialog, getCurrentWindow } = remote
  const config = { ...options }

  return dialog.showOpenDialog(getCurrentWindow(), config)
}

async function openFolderChoiceDialog(
  options: OpenDialogOptions = {},
  multi = false
): Promise<string[]> {
  const title = 'Choose a Directory'
  // const properties = ['openDirectory', multi && 'multiSelections'].filter(
  //   v => v
  // )
  console.log(multi)
  const res = await openDialog({
    ...options,
    title,
    properties: ['openDirectory']
  })
  return res.filePaths
}

export const AddSourceModal: React.FC = () => {
  const selectLocalHolder = async () => {
    const paths = await openFolderChoiceDialog({
      buttonLabel: 'Add to Workspace'
    })
    console.log(paths)
  }
  return (
    <>
      <div className="header">Local Platform</div>
      <div className="body">
        <p>Add one or more folders from your computer to the workspace.</p>
        <p>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={selectLocalHolder}
          >
            Select a Folder
          </button>
        </p>
      </div>
    </>
  )
}
