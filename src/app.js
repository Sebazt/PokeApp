'use strict'

const express = require('express')
const bodyParser = require('body-parser'); // para que lleguen como JSON


// routes
const initPokeRoutes = require('./routes/pokeRoutes');

function initApp() {
  const app = express()
  app.use(bodyParser.json) // My app only work with JSON

  initPokeRoutes(app)
  return app
}

module.exports = initApp