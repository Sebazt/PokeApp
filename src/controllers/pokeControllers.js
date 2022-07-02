'use strict'

const pokeServices = require('../services/pokeServices')

function getAllPoke (req, res){
  try{
    return res.send(pokeServices.getUsers(req.query))
  }catch(err){
    console.log(err);
    return res.status(500).send('Error de servidor')
  }
}

function getPokeByid(req, res) {
  try {
    return res.send(pokeServices.getUserById(req.params.id))
  } catch (err) {
    console.log(err);
    return res.status(500).send('Error de servidor')
  }
}

function postAPoke ( req, res ){
  try{
    const user = pokeServices.createUser(req.body)
    return res.status(201).send(user)
  }catch(err){
    console.log(err.message);
    if(err.endsWith('requerido')){
      return res.status(400)
    }
  }
}

module.exports ={
  getAllPoke,
  getPokeByid,
  postAPoke,
}
