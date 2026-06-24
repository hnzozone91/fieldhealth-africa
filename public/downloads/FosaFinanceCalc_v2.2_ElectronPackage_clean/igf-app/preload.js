'use strict';

const { contextBridge, ipcRenderer } = require('electron');

// Expose a safe, minimal API to the renderer (the HTML tool)
// The tool calls window.electronAPI.saveFile() instead of the raw ipcRenderer
contextBridge.exposeInMainWorld('electronAPI', {

  // Save file via native dialog
  saveFile: (defaultName, data) =>
    ipcRenderer.invoke('save-file', { defaultName, data }),

  // App version
  getVersion: () => process.env.npm_package_version || '2.0.0',

  // Platform detection
  platform: process.platform,

  isElectron: true,
});
