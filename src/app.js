'use strict'
const dotenv = require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser'); // para que lleguen como JSON


// routes
const initPokeRoutes = require('./routes/pokeRoutes');
const initAuthRoutes = require('./routes/userRoutes')



function initApp(){
  const app = express()
  app.use(bodyParser.json()) // My app only work with JSON

  initPokeRoutes(app)
  initAuthRoutes(app)
  return app
}

module.exports = initApp
