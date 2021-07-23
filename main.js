const { app, BrowserWindow } = require('electron');
const path = require('path')

function creatPrincipalWindow() {
  let principalWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });

  principalWindow.loadFile('index.html');
}

app.whenReady().then(creatPrincipalWindow);

// compativility for macOS
app.on('window-all-closed', function () {
  if (process.platform === 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (BrowserWindow.getAllWindows().length === 0) {
    creatPrincipalWindow();
  }
});