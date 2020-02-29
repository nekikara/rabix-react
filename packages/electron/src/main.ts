import { app, BrowserWindow } from 'electron';

let win: BrowserWindow | null;

function createWindow() {
  win = new BrowserWindow({ width: 1400, height: 900});
  win.loadURL("http://localhost:3000")
  win.on('closed', () => {
    win = null;
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
