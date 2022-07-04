'use strict'

const pokeServices = require('../services/pokeServices')

function getAllPoke(req, res) {
  try {
    return res.send(pokeServices.getPokemons(req.query))
  } catch (err) {
    console.log(err);
    return res.status(500).send('Internal Server Error')
  }
}

function getPokeByid(req, res) {
  try {
    console.log(req.params)
    return res.send(pokeServices.getPokemonsById(req.params.id))
  } catch (err) {
    const regex = new RegExp('exist', 'g')
    if (regex.test(err.message)) {
      return res.status(404).send('Not found')
    }
  }
}

function postAPoke(req, res) {
  try {
    const pokemon = pokeServices.createPokemon(req.body)

    return res.status(201).send(pokemon)
  } catch (err) {
    console.log(err.message);

    const regex = new RegExp('required', 'g')
    if (regex.test(err.message)) {

      return res.status(400).send('Bad request')
    }
  }
}

function updateAPokemon(req, res){
  try{
    console.log(req.params);
    return res.status(200).send(pokeServices.updateAPokemon(req.params.id, req.body))
  }catch(err){
    console.log(err);
    const regex = new RegExp('exist', 'g')
    if (regex.test(err.message)) {
      return res.status(404).send('Not found')
    }
  }
}

function deleteApokemon(req,res){
  try{
    console.log(req.params);
    return res.status(204).send(pokeServices.deleteApokemon(req.params.id))
    
  }catch (err){
    console.log(err)
    const regex = new RegExp('exist', 'g')
    if (regex.test(err.message)) {
      return res.status(404).send('Not found')
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
