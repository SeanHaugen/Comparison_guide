// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  mainWindow.loadURL('file://' + path.join(/Users/shaugen93/Desktop/Coding_Projects/SD_stuff/Comparison_guide-1/public, 'index.html'));
}

app.on('ready', createWindow);
