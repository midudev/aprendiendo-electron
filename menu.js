const { Menu, dialog } = require('electron')

const setMainMenu = (mainWindow) => {
  const template = [
    {
      label: 'miduMarkDown', // en modo desarrollo, sale Electron
      submenu: [
        { role: 'about' },
        { type: 'separator' },
        { role: 'services' },
        { type: 'separator' },
        { role: 'hide' },
        { role: 'hideOthers' },
        { role: 'unhide' },
        { type: 'separator' },
        { role: 'quit' }
      ]
    },
    {
      label: 'Edit',
      submenu: [
        {
          label: 'Abrir archivo',
          click: () => {
            dialog.showOpenDialog(mainWindow, {
              filters: [
                {
                  name: 'Markdown',
                  extensions: ['md']
                }
              ],
              title: 'Selecciona tu archivo Markdown',
              defaultPath: '~/Desktop',
              properties: ['openFile', 'openDirectory']
            }).then(result => {
              console.log(result.canceled)
              console.log(result.filePaths)
            }).catch(err => {
              console.log(err)
            })
          }
        }
      ]
    },
    {
      label: 'Themes',
      submenu: [
        {
          label: 'Light',
          click: () => {
            mainWindow.webContents.send('update-theme', 'light')
          }
        },
        {
          label: 'Dark',
          click: () => {
            mainWindow.webContents.send('update-theme', 'dark')
          }
        }
      ]
    },
    {
      label: 'View',
      submenu: [
        { role: 'reload' },
        { role: 'forceReload' },
        { role: 'toggleDevTools' },
        { type: 'separator' },
        { role: 'resetZoom' },
        { role: 'zoomIn' },
        { role: 'zoomOut' },
        { type: 'separator' },
        { role: 'togglefullscreen' }
      ]
    }
  ]

  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
}

module.exports = {
  setMainMenu
}
