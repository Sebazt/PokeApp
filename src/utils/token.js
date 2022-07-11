'use strict'

const { sign, verify } = require('jsonwebtoken')

function createToken (data) {
  return sign(data, process.env.TOKEN_SIGNATURE, {expiresIn: '1h'}) // el segundo parametro es un strin, es mejor se se genera en base 64
}

function verifyToken(token){
  return verify(token, process.env.TOKEN_SIGNATURE)
}

module.exports = {
  createToken,
  verifyToken
}
