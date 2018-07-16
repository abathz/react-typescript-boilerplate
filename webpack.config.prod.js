const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin')

module.exports = {
  mode: 'production',
  devtool: 'cheap-module-source-map',
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
        test: /\.(scss|css)$/,
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
    new WorkboxPlugin.GenerateSW({
      // these options encourage the ServiceWorkers to get in there fast 
      // and not allow any straggling "old" SWs to hang around
      swDest: 'sw.js',
      clientsClaim: true,
      skipWaiting: true
    }),
    new SimpleProgressWebpackPlugin()
  ]
}
