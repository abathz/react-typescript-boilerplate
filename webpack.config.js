var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin')

module.exports = {
  entry: {
    main: [
      './src/index.tsx'
    ],
    vendor: ['jquery', 'popper.js', 'bootstrap']
  },
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'public/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        enforce: 'pre',
        exclude: /node_modules/,
        use: 'ts-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract('css-loader')
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract('css-loader!sass-loader')
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: 'file-loader?name=public/fonts/[name].[ext]'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    alias: {
      container: path.resolve(__dirname, 'src/container'),
      components: path.resolve(__dirname, 'src/components'),
      actions: path.resolve(__dirname, 'src/actions'),
      reducers: path.resolve(__dirname, 'src/reducers')
    }
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'public/site.css',
      allChunks: true
    }),
    new webpack.ProvidePlugin({
      Popper: ['popper.js', 'default'],
      $: 'jquery',
      jQuery: 'jquery',
      React: 'react'
    }),
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'public/vendor.bundle.js', minChunks: 1000 }),
    new SimpleProgressWebpackPlugin()
  ]
}
