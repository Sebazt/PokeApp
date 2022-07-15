'use strict'

const Boom = require('@hapi/boom')
const pokeServices = require('../services/pokeServices')

function getAllPoke(req, res, next) {
  try {
    return res.send(pokeServices.getPokemons(req.query))
  } catch (err) {
    console.log(err);
    return next(Boom.notFound(err.message))
  }
}

function getPokeByid(req, res, next) {
  try {
    console.log(req.params)
    return res.send(pokeServices.getPokemonsById(req.params.id))
  } catch (err) {
    const regex = new RegExp('exist', 'g')
    if (regex.test(err.message)) {
      return next(Boom.notFound(err.message))
    }
  }
}

function postAPoke(req, res) {
  try {
    const pokemon = pokeServices.createPokemon(req.body)
    /* console.log("-------------------------------------------");
    console.log(req.body);
    console.log("-------------------------------------------"); */
    return res.status(201).send(pokemon)
  } catch (err) {
    console.log(err.message);

    const regex = new RegExp('required', 'g')
    if (regex.test(err.message)) {

      return next(Boom.badRequest(err.message))
    }
  }
}

function updateAPokemon(req, res,next){
  try{
    console.log(req.params);
    return res.status(200).send(pokeServices.updateAPokemon(req.params.id, req.body))
  }catch(err){
    console.log(err);
    const regex = new RegExp('exist', 'g')
    if (regex.test(err.message)) {
      return next(Boom.notFound(err.message))
    }
  }
}

function deleteApokemon(req,res,next){
  try{
    console.log(req.params);
    return res.status(204).send(pokeServices.deleteApokemon(req.params.id))

  }catch (err){
    console.log(err)
    const regex = new RegExp('exist', 'g')
    if (regex.test(err.message)) {
      return next(Boom.notFound(err.message))
    }
  }
}


module.exports = {
  getAllPoke,
  getPokeByid,
  postAPoke,
  updateAPokemon,
  deleteApokemon
}
