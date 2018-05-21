var express = require('express')
var path = require('path')
var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')

var app = express()

const isDevelopment = process.env.NODE_ENV !== 'production'

if (!isDevelopment) {
  app.use(express.static(__dirname))

  // app.use('/api', routes)

  app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'index.html'))
  })

  app.listen(8080, function () {
    console.log('Your app listening on 8080! have a nice day:)')
  })
} else {
  var config = require('./webpack.config.js')
  var compiler = webpack(config)

  app.use(express.static(__dirname))

  app.use(webpackDevMiddleware(compiler))

  // app.use('/api', routes)

  app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'index.html'))
  })

  app.listen(8000)
}
