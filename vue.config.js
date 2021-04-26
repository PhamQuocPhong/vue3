module.exports = {
  devServer: {
    port: 8000
  },

  //  configureWebpack:{
  //   optimization: {
  //     splitChunks: {
  //       minSize: 10000,
  //       maxSize: 250000,
  //     }
  //   }
  // },
  lintOnSave: true,

  transpileDependencies: [
    'vuetify'
  ]
}
