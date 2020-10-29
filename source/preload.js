// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.

const appVersion = require('../package.json').version;
const {ipcRenderer} = require('electron');
const log = require('electron-log')

window.addEventListener('DOMContentLoaded', () => {
    document.getElementById("v").innerHTML = appVersion;
    document.getElementById("c-v").innerHTML = appVersion;
});

ipcRenderer.on('message', (arg) => {
    console.log('imhere')
    document.getElementById("messages").innerHTML = arg;
});

