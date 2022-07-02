'use strict'

let count = 1;
let users = []

function createUser(user){
  if(!user.name){
    throw new Error('requerido')
  }

  user.id = count
  count += 1

  users.push(user)
  return user
}

function getUsers(params){
  if(params.name){
    const data = users.filter(user =>{
      user.name === params.name
    })
    return data
  }
  else{
    return users
  }
}

function getUserById(id){
  const user = users.find(user=> user.id === Number.parseInt.id)

  if(!user){
    throw new Error('El usuario no existe')
  }

  return user
}


module.exports = {
  createUser,
  getUsers,
  getUserById
}