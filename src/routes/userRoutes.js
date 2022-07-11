'use strict'

const Auth = require('../controllers/userControllers')



function initAuthRoutes (app){
  app.post('/auth/login',Auth.login)
}

module.exports = initAuthRoutes
