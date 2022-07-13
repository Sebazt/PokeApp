'use strict'

const { createToken } = require('../utils/token')

class AuthService{
  constructor() {
    this.users =[
      {
        id: 1,
        name: "Sebastian",
        username:'sebaslo10@hotmail.com',
        password:'1234567'
      }
    ]
  }

  getUserById(id){
    return this.users.find(user => user.id === id)
  }

  login({username, password}){
    const user = this.users.find((user) =>{
      user.username === username && user.password === password
    })

    if(!user){
      throw new Error('User Not found')
    }

    const token = createToken({id: user.id * 150, name: user.name})
    // console.log('token: ', token)
    return {token}
  }
}

module.exports = new AuthService()
