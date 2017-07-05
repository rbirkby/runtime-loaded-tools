const path = require('path')

module.exports = {

  entry:  './src/index.js',

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ] 
  },
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.esm.js'
    }
  },  
  output: {
    filename: 'application.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: 'build/',
    library: 'alerts',
    libraryTarget: 'umd'
  }
}
