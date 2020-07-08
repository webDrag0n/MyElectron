// include the ipc module to communicate with main process.
const ipcRenderer = require('electron').ipcRenderer;
const btnclick = document.getElementById("hey_btn");
btnclick.addEventListener('click', function () {
    var arg ="webDrag0n!";
    hey();
   //send the info to main process . we can pass any arguments as second param.
    ipcRenderer.send("btnclick", arg); // ipcRender.send will pass the information to main process
});

ipcRenderer.on('btnclick-task-finished', function(event, param) {
    document.getElementById("hey_display").textContent = "HEY! " + param;
});