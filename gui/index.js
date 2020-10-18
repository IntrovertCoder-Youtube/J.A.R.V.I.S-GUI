const electron = require('electron');
const path = require('path');
const url = require('url');

// SET ENV
process.env.NODE_ENV = 'development';

const {
  app,
  BrowserWindow,
  Menu,
  ipcMain
} = electron;

let mainWindow;
let addWindow;

// Listen for app to be ready
app.on('ready', function() {
  // Create new window

  mainWindow = new BrowserWindow({
        width:350,
        height:550,
  });

  mainWindow.setMenuBarVisibility(false);
  // Load html in window
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));
  // Quit app when closed
  mainWindow.on('closed', function() {
    app.quit();
  });
});