// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.

const appVersion = require('../package.json').version;

window.addEventListener('DOMContentLoaded', () => {
    document.getElementById("v").innerHTML = appVersion;
    document.getElementById("c-v").innerHTML = appVersion;
});