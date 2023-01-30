const { app, ipcMain, BrowserWindow, screen} = require("electron");
const Store = require("electron-store");

let appWin;

let printWin;
const store = new Store();

//If the record does not exist, it is created with a default value of 0.
if (!store.get("clicks")) {
    store.set("clicks", 0);
}

//This function creates the window and its properties.
createWindow = () => {
    appWin = new BrowserWindow({
        width: 1024,
        height: 600,
        frame:false,
        title: "smart safe",
        resizable: false,
        webPreferences: {
            nodeIntegration: true
        }
    });
    
    appWin.loadURL(`file://${__dirname}/dist/index.html`);

    appWin.setMenu(null);


   

    appWin.webContents.openDevTools();

    appWin.on("closed", () => {
        appWin = null;
    });

    printWin = new BrowserWindow({
        width: 800,
        height: 600,
        title: "PrintWin",
        resizable: false,
        webPreferences: {
            nodeIntegration: true
        }
    });
    printWin.loadURL(`file://${__dirname}/dist/printWin.html`);

    printWin.setMenu(null);

    printWin.hide();

  //  printWin.webContents.openDevTools();

    printWin.on("closed", () => {
        printWin = null;
    });
}


var child = require('child_process').execFile;
var executablePath = "F:\\Dotnet Project\\New Build - 25-3-22\\Manager\\net5.0-windows\\sea_software.exe";

//var child = require('child_process').execFile;
//var executablePath = "dist/valut/sea_software.exe";



var child = require('child_process').execFile;
var executablePath1 = "F:\\Dotnet Project\\New Build - 25-3-22\\Manager\\net5.0-windows\\sea_software.exe";


var child = require('child_process').execFile;
var executablePath2 = "F:\\Dotnet Project\\New Build - 25-3-22\\Valut\\net5.0-windows\\sea_software.exe";


var child = require('child_process').execFile;
var executablePath3 = "F:\\Dotnet Project\\New Build - 25-3-22\\Admin\\net5.0-windows\\sea_software.exe";


//var child = require('child_process').execFile;
//var executablePath3 = "F:\\net5.0-windows\\sea_software.exe";



app.on("ready", createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
      app.quit();
    }
});

/* ipcMain is listening the "message" channel, and when the message arrives, 
  it replies with "pong" */
ipcMain.on("message", (event,data) =>{
  console.log("message:evevnt"+JSON.stringify(data));
    printWin.webContents.send('PreparePrintReport',data);
});

ipcMain.on('PrintReceipt',(event,data)=>{
    printWin.webContents.print({silent:false});
});

ipcMain.on('openshiftmanagerlocker',(event,data)=>{

 child(executablePath, function(err, data) {
    
  const opts = { show: true };
  if (BrowserWindow.getFocusedWindow()) {
  appWin = BrowserWindow.getFocusedWindow();
  const pos = appWin.getPosition();
  Object.assign(opts, {
    x: pos[0] + 22,
    y: pos[0] + 22,
  });
};
  if(err){
     console.error(err);
     return;
  }

  console.log(data.toString());
})
});


ipcMain.on('openmanagerlocker',(event,data)=>{

  child(executablePath1, function(err, data) {
     
   const opts = { show: true };
   if (BrowserWindow.getFocusedWindow()) {
   appWin = BrowserWindow.getFocusedWindow();
   const pos = appWin.getPosition();
   Object.assign(opts, {
     x: pos[0] + 22,
     y: pos[0] + 22,
   });
 };
   if(err){
      console.error(err);
      return;
   }
 
   console.log(data.toString());
 })
 });



ipcMain.on('openvalutlocker',(event,data)=>{
      
    child(executablePath2, function(err, data) {
     
      if(err){
        console.error(err);
        return;
     }
  
     console.log(data.toString());
    })
 });

 
 



 ipcMain.on('openadminlocker', (event,data)=>{
 
 let sp = child(executablePath3, function(err, data) {
     
    if(err){
      console.error(err);
      return;
   }

   console.log(data.toString());
  })
  setTimeout(function() {
    sp.kill()
}, 5000)
 });



