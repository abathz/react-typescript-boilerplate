var path = require('path')
var webpack = require('webpack')
var MiniCssExtractPlugin = require('mini-css-extract-plugin')
var SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.tsx',
    vendor: ['jquery', 'popper.js', 'bootstrap']
  },
  output: {
    path: __dirname,
    filename: 'public/[name].bundle.js'
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
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
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
    new MiniCssExtractPlugin({
      filename: 'public/site.css'
    }),
    new webpack.ProvidePlugin({
      Popper: ['popper.js', 'default'],
      $: 'jquery',
      jQuery: 'jquery',
      React: 'react'
    }),
    new SimpleProgressWebpackPlugin()
  ]
}
