const { app, BrowserWindow } = require('electron');
const url = require('url');
const path = require('path');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1240,
    height: 800,
    icon: __dirname + '../public/logo.icns',
    title: 'Timez',
  });

  if (process.env.NODE_ENV === 'development') {
    mainWindow.loadURL('http://localhost:2000');
  } else {
    mainWindow.loadURL(
      url.format({
        pathname: path.join(__dirname, '/../build/index.html'),
        protocol: 'file:',
        slashes: true,
      }),
    );
  }
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
