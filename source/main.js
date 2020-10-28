const { app, BrowserWindow, protocol, ipcMain } = require('electron')
const { autoUpdater } = require("electron-updater")
const log = require('electron-log')
const path = require('path')

autoUpdater.logger = log;
autoUpdater.logger.transports.file.level = 'info';
log.info('App starting...');

let win;

function sendStatusToWindow(text) {
  log.info(text);
  win.webContents.send('message', text);
}

function createWindow () {
    
    // Create the browser window.
    const win = new BrowserWindow({
    title: "Blue Caribbean Properties - Management System",
    webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
        contextIsolation: true
    }
    })

    win.setMenuBarVisibility(false)

    // and load the index.html of the app.
    win.loadFile(path.join(__dirname, 'index.html'))

    autoUpdater.checkForUpdatesAndNotify()

}

/*checking for updates*/
autoUpdater.on("checking-for-update", () => {
    sendStatusToWindow('Checking for update...');
});

/*No updates available*/
autoUpdater.on("update-not-available", info => {
    sendStatusToWindow('Update not available.');
});

/*New Update Available*/
autoUpdater.on("update-available", info => {
    sendStatusToWindow('Update available.');
});

/*Download Status Report*/
autoUpdater.on("download-progress", progressObj => {
    sendStatusToWindow('Download progress...');
});

/*Download Completion Message*/
autoUpdater.on("update-downloaded", info => {
    sendStatusToWindow('Update downloaded; will install in 5 seconds');
});

/*Install And Quit*/
autoUpdater.on('update-downloaded', (ev, info) => {
  // Wait 5 seconds, then quit and install
  // In your application, you don't need to wait 5 seconds.
  // You could call autoUpdater.quitAndInstall(); immediately
  setTimeout(function() {
    autoUpdater.quitAndInstall();  
  }, 5000)
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
    createWindow()

    app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.