const { app, BrowserWindow } = require("electron");
require('electron-reload')(__dirname);

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.loadFile("index.html");

  win.webContents.openDevTools();

  win.on("closed", () => {
    win = null;
  });
}

app.on("ready", createWindow);

app.on('window-all-closed', () => {
  if (win === null) {
    createWindow();
  }
})
