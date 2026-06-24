'use strict';

const { app, BrowserWindow, Menu, dialog, ipcMain, shell } = require('electron');
const path = require('path');
const fs   = require('fs');

const APP_NAME    = 'FosaFinanceCalc';
const APP_VERSION = '2.0.0';
const APP_AUTHOR  = 'Dr. Nzozone Henry Fomukong';
const APP_ROLE    = 'District Medical Officer, Mamfe Health District, Cameroon';
const APP_URL     = 'https://hnzozone91.substack.com';

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280, height: 860,
    minWidth: 920, minHeight: 660,
    title: `${APP_NAME} v${APP_VERSION}`,
    backgroundColor: '#f5f0e8',
    icon: path.join(__dirname, 'assets', 'icon.png'),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'),
      webSecurity: true,
      // These are critical for input fields to work reliably in Electron
      spellcheck: false,          // avoids focus conflicts on text inputs
      textAreasAreResizable: true,
    },
    show: false,
  });

  mainWindow.loadFile(path.join(__dirname, 'src', 'index.html'));

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
    mainWindow.focus();
    // Ensure the webContents is focused so keyboard/mouse events work immediately
    mainWindow.webContents.focus();
  });

  // Re-focus webContents whenever the window regains focus
  mainWindow.on('focus', () => {
    if (mainWindow && mainWindow.webContents) {
      mainWindow.webContents.focus();
    }
  });

  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith('http://') || url.startsWith('https://')) shell.openExternal(url);
    return { action: 'deny' };
  });

  mainWindow.on('closed', () => { mainWindow = null; });
}

function buildMenu() {
  const isMac = process.platform === 'darwin';

  const template = [
    ...(isMac ? [{ label: app.name, submenu: [
      { role: 'about' }, { type: 'separator' },
      { role: 'services' }, { type: 'separator' },
      { role: 'hide' }, { role: 'hideOthers' }, { role: 'unhide' },
      { type: 'separator' }, { role: 'quit' }
    ]}] : []),

    { label: 'Fichier / File', submenu: [
      { label: '💾  Sauvegarder / Save Data',
        accelerator: 'CmdOrCtrl+S',
        click: () => mainWindow?.webContents.executeJavaScript('saveData&&saveData()') },
      { label: '📂  Charger / Load Data',
        accelerator: 'CmdOrCtrl+O',
        click: async () => {
          const { filePaths } = await dialog.showOpenDialog(mainWindow, {
            title: 'Charger données FosaFinanceCalc',
            filters: [{ name: 'Données FosaFinanceCalc (JSON)', extensions: ['json'] }],
            properties: ['openFile']
          });
          if (!filePaths.length) return;
          const data = fs.readFileSync(filePaths[0], 'utf8');
          mainWindow?.webContents.executeJavaScript(
            `(function(){try{D=JSON.parse(${JSON.stringify(data)});
            if(D.facility?.name){
              document.getElementById('setup').style.display='none';
              updateHeader();populateYears();buildSvcTabs();
              document.getElementById('dm').value=new Date().getMonth();
              renderDash();alert('✓ Données chargées : '+D.facility.name);
            }}catch(e){alert('Erreur: '+e.message);}})()` );
        }
      },
      { type: 'separator' },
      { label: '🖨️  Imprimer / Print', accelerator: 'CmdOrCtrl+P',
        click: () => mainWindow?.webContents.print() },
      { type: 'separator' },
      isMac ? { role: 'close' } : { role: 'quit', label: 'Quitter / Quit' }
    ]},

    { label: 'Édition / Edit', submenu: [
      { role: 'undo', label: 'Annuler / Undo' },
      { role: 'redo', label: 'Rétablir / Redo' },
      { type: 'separator' },
      { role: 'cut',       label: 'Couper / Cut' },
      { role: 'copy',      label: 'Copier / Copy' },
      { role: 'paste',     label: 'Coller / Paste' },
      { role: 'selectAll', label: 'Tout sélectionner / Select All' },
    ]},

    { label: 'Affichage / View', submenu: [
      { role: 'reload', label: 'Actualiser / Reload' },
      { role: 'toggleDevTools', label: 'Outils développeur' },
      { type: 'separator' },
      { role: 'resetZoom', label: 'Zoom normal' },
      { role: 'zoomIn',    label: 'Zoom avant' },
      { role: 'zoomOut',   label: 'Zoom arrière' },
      { type: 'separator' },
      { role: 'togglefullscreen', label: 'Plein écran / Fullscreen' },
    ]},

    { label: 'Aide / Help', submenu: [
      { label: `À propos de ${APP_NAME}`,
        click: async () => {
          await dialog.showMessageBox(mainWindow, {
            type: 'info',
            icon: path.join(__dirname, 'assets', 'icon.png'),
            title: `À propos / About — ${APP_NAME}`,
            message: APP_NAME,
            detail: [
              `Version : ${APP_VERSION}`,
              '',
              'Auteur / Author :',
              APP_AUTHOR,
              APP_ROLE,
              'South West Region, Republic of Cameroon',
              '',
              'Publication :',
              APP_URL,
              '',
              'Gestion Financière des Recettes Propres',
              'Formations Sanitaires — Catégories 3, 4 et 5',
              '',
              'Formule conforme :',
              'Décret 2016/6447/PM | Décret 2018/366',
              'RGCP Art.68 & 71 | Circulaire MINSANTE',
              '',
              '© 2026 Dr. Nzozone Henry Fomukong',
            ].join('\n'),
            buttons: ['OK'],
          });
        }
      },
      { label: 'Substack / Publication',
        click: () => shell.openExternal(APP_URL) },
      { type: 'separator' },
      { label: 'Signaler un problème / Report Issue',
        click: () => shell.openExternal(
          `mailto:hnzozone91.nh@gmail.com?subject=FosaFinanceCalc v${APP_VERSION} — Issue`) },
    ]},
  ];

  Menu.setApplicationMenu(Menu.buildFromTemplate(template));
}

ipcMain.handle('save-file', async (event, { defaultName, data }) => {
  const { filePath, canceled } = await dialog.showSaveDialog(mainWindow, {
    title: 'Sauvegarder données FosaFinanceCalc',
    defaultPath: defaultName || 'FosaFinanceCalc_donnees.json',
    filters: [{ name: 'Données FosaFinanceCalc (JSON)', extensions: ['json'] }],
  });
  if (canceled || !filePath) return { success: false };
  try {
    fs.writeFileSync(filePath, data, 'utf8');
    // Restore focus to webContents after native dialog closes
    setTimeout(() => {
      if (mainWindow && !mainWindow.isDestroyed()) {
        mainWindow.webContents.focus();
      }
    }, 60);
    return { success: true, filePath };
  } catch (err) {
    return { success: false, error: err.message };
  }
});

app.whenReady().then(() => {
  buildMenu();
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
