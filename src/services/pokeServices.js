'use strict'

let count = 1;
let pokemones = []

function createPokemon(pokemon) {
  if (!pokemon.name) {
    throw new Error('The name of Pokemon is required')
  }
  pokemon.id = count
  count += 1

  pokemones.push(pokemon)
  return pokemon
}

function getPokemons(params) {
  if (params.name) {
    const data = pokemones.filter(user => {
      user.name === params.name
    })
    return data
  }
  else {
    return pokemones
  }
}

function getPokemonsById(id) {
  const pokemon = pokemones.find(pokemon => pokemon.id === Number.parseInt(id, 10))

  if (!pokemon) {
    throw new Error("This pokemon don't exist")
  }
  return pokemon
}

function deleteApokemon(id) {
  const pokemon = pokemones.find(pokemon => pokemon.id === Number.parseInt(id, 10))

  if (!pokemon) {
    throw new Error("This pokemon don't exist")
  }

  pokemones = pokemones.filter(item => item.id !== Number.parseInt(id, 10))
  return pokemones
}

function updateAPokemon(id, data) {
  const index = pokemones.findIndex(poke => poke.id === Number.parseInt(id, 10))

  if (index < 0) {
    throw new Error("This pokemon don't exist")
  }

  let pokemon = pokemones[index]

  pokemon = {
    ...pokemon,
    ...data
  }

  pokemones[index] = pokemon

  return pokemon
}


module.exports = {
  createPokemon,
  getPokemons,
  getPokemonsById,
  deleteApokemon,
  updateAPokemon
}