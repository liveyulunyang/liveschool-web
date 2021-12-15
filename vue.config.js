/* eslint-disable no-unused-vars */
/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
const webpack = require('webpack')

module.exports = {
  // devServer: {
  //   https: true
  // },
  publicPath: '/liveschool-web/',

  configureWebpack: config => {
    if (process.env.NODE_ENV !== 'production') return
    return {
      plugins: [
        new webpack.ProvidePlugin({
          $: 'jquery',
          jquery: 'jquery',
          'windows.jquery': 'jquery',
          test: /\.scss$/,
          loaders: ['style', 'css', 'sass']
        })
      ]
    }
  }
},
{
  'compilerOptions': {
    'baseUrl': '.',
    'paths': {
      '@/*': [
        'src/*'
      ]
    }
  }
}
