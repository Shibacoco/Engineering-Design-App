// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
const path = require('path')
const electron = require('electron')

require('electron-reload')(__dirname, {
  electron: require(`${__dirname}/node_modules/electron`)
});

function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 450,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      }
  })
  // mainWindow.setResizable(false);
  mainWindow.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})
