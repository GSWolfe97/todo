const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const path = require('path')
const url = require('url')

const Menu = electron.Menu

const ipc = electron.ipcMain

app.on('ready', function(){
  mainWindow = new BrowserWindow({
    width:500,
    height:500
  })

  mainWindow.loadURL(path.join(__dirname, "index.html"));

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu)

  mainWindow.on('closed', _=>{
    console.log('closed');
    mainWindow = null
  })
})

const template = [
  {
    label: electron.app.getName(),
    submenu: [
      {
        label: 'About'
      },{ type:'separator'}, 
      {label: 'Quit',
       click: _=>{
         app.quit()
       },
        accelerator: 'Ctrl+Q'}
    
    ]
  },{
      label: "Dev Tools",
      click: function(item, focusedWindow){
          focusedWindow.toggleDevTools()
      }, 
      accelerator: 'Ctrl+i'
  }
]

ipc.on('', (evt, arg) =>{

})