module.exports = {
  outputDir: process.env.VUE_APP_DIST_PATH ? process.env.VUE_APP_DIST_PATH : 'dist',
  pages: {
    popup: {
      template: 'public/browser-extension.html',
      entry: './src/popup/main.js',
      title: 'Popup'
    }
  },
  pluginOptions: {
    browserExtension: {
      componentOptions: {
        background: {
          entry: 'src/background.js'
        }
      }
    }
  }
}
