var path = require('path')
var webpack = require('webpack')
var MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  entry: {
    app: './src/index.tsx',
    vendor: ['jquery', 'popper.js', 'bootstrap']
  },
  output: {
    path: __dirname,
    publicPath: './',
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
  optimization: {
    minimize: true,
    noEmitOnErrors: true
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
  performance: { hints: false },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'public/site.css'
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.ProvidePlugin({
      Popper: ['popper.js', 'default'],
      $: 'jquery',
      jQuery: 'jquery',
      React: 'react'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new OfflinePlugin({
      ServiceWorker: {
        output: 'src/sw.js'
      },
      AppCache: null
    }),
  ]
}
