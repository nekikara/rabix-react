import {
  app,
  BrowserWindow,
  OpenDialogOptions,
  OpenDialogReturnValue,
  remote,
  ipcMain
} from 'electron'

let win: BrowserWindow | null

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

function createWindow() {
  win = new BrowserWindow({ width: 1400, height: 900 })
  win.loadURL('http://localhost:3000')
  win.on('closed', () => {
    win = null
  })

  ipcMain.on('select-dirs', async (event, arg) => {
    const paths = await openFolderChoiceDialog({
      buttonLabel: 'Add to Workspace'
    })
    console.log(event, arg, paths)
  })
}

app.on('ready', createWindow)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})
