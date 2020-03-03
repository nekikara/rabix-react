import React from 'react'
// import { ipcRenderer } from 'electron'

process.once('loaded', () => {
  console.log('hogehoge')
})

export const AddSourceModal: React.FC = () => {
  const selectLocalHolder = () => {
    // ipcRenderer.send('select-dirs')
    console.log('=========')
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
