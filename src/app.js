'use strict'
const dotenv = require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser'); // para que lleguen como JSON

// middlewares
const validateToken = require('../src/middleware/validateToken')

// routes
const initPokeRoutes = require('./routes/pokeRoutes');
const initAuthRoutes = require('./routes/userRoutes')
const error = require('./middleware/error')


function initApp(){
  const app = express()
  app.use(bodyParser.json()) // My app only work with JSON
  app.use(validateToken)


  initPokeRoutes(app)
  initAuthRoutes(app)
  app.use(error) // siempre debe de ir de ultimo para que pase por las rutas
  return app
}

module.exports = initApp
