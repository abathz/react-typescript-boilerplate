import express from 'express'
import path from 'path'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'

let app = express()

const isDevelopment = process.env.NODE_ENV !== 'production'

if (!isDevelopment) {
  app.use(express.static(__dirname))

  app.get('*', function (req: any, res: any) {
    res.sendFile(path.resolve(__dirname, 'index.html'))
  })

  app.listen(8000, function () {
    console.log('Your app listening on 8000! have a nice day:)')
  })
} else {
  let config = require('./webpack.config.js')
  let compiler = webpack(config)

  app.use(express.static(__dirname))

  app.use(webpackDevMiddleware(compiler))

  app.get('*', function (req: any, res: any) {
    res.sendFile(path.resolve(__dirname, 'index.html'))
  })

  app.listen(3000)
}
