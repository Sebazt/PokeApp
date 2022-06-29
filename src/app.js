'use strict'

const express = require('express')
const bodyParser = require('body-parser'); // para que lleguen como JSON


// routes 
//const initUserRoutes = require('./routes/user')

function initApp() {
  const app = express()
  app.use(bodyParser.json) // My app only work with JSON

  return app
}

module.exports = initApp