const { app, BrowserWindow, screen } = require('electron');
const path = require('path');

function createWindow() {
    const { width, height } = screen.getPrimaryDisplay().workAreaSize;

    const win = new BrowserWindow({
        width: width,
        height: height,
        transparent: true,      // Crucial: makes background invisible
        frame: false,           // No window borders or close buttons
        alwaysOnTop: true,      // Floats over VS Code
        hasShadow: false,
        skipTaskbar: true,      // Doesn't show in taskbar
        resizable: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    // Make the window "click-through" so you can keep working
    win.setIgnoreMouseEvents(true, { forward: true });

    win.loadFile('index.html');

    // Close the app automatically after 5 seconds (when animation ends)
    setTimeout(() => {
        win.close();
    }, 5000);
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});