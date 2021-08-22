const path = require("path")
const webpack = require("webpack")

const resolve = (dir) => {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: './',
  devServer: {
    proxy: {
      '/api': {
        target: 'https://z1creative.com/'
      }
    }
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
      }),
    ]
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
  }
}
