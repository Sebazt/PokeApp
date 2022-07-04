'use strict'

const pokeController = require('../controllers/pokeControllers')


function initPokeRoutes (app){
  app.get('/pokemon', pokeController.getAllPoke)

  app.post('/pokemon', pokeController.postAPoke)

  app.get('/pokemon/:id', pokeController.getPokeByid)

  app.patch('/pokemon/:id', pokeController.updateAPokemon)

  app.delete('/pokemon/:id', pokeController.deleteApokemon)
}

module.exports = initPokeRoutes