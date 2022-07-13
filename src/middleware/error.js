'use strict'

const Boom = require('@hapi/boom')

module.exports = function error(error, req, res, next){
  if(error.isBoom){
    return res.status(error.output.statuscode).send(error.output.payload)
  }

  const newError = Boom.internal('Wrong Error')
  return res.status(newError.output.statuscode).send(error.output.payload)
}
// el middleware de error resive un parametro más llamado error
