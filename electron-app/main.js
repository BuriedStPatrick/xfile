const electron = require('electron')

const { app, BrowserWindow } = electron

let mainWindow

app.on('ready', _ =>{

    mainWindow = new BrowserWindow({
        height: 480,
        width: 690,
        frame: true
    })

    mainWindow.loadURL('http://localhost:4200/')

    app.on('close', _ => {
        mainWindow = null
    })
})