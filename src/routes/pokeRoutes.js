'use strict'

const pokeController = require('../controllers/pokeControllers')

function initPokeRoutes (app){
  app.get('/pokemon', pokeController.get)

  app.post('/pokemon', pokeController.post)

  app.get('/pokemon:id', (req, res) => {
    return res.send('Hi world BessoftLabs')
  })

  app.patch('/pokemon/:id', (req, res) => { // Patch's similary to Put, but have a dif.
    return res.send({})
  })

  app.delete('/pokemon/:id', (req, res) => {
    return res.send({})
  })
}

module.exports = initPokeRoutes