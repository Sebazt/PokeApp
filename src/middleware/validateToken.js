'use strict';

const {verifyToken} = require('../utils/token')
const authService = require('../services/userServices')
const Boom = require('@hapi/boom')


function validateToken(req, res, next) {
  const { authorization } = req.headers

  // exclude login request
  if (req.url === '/auth/login') return next()

  if (!authorization) return next(Boom.unauthorized('Token not sent'))

  // standard case
  if (!authorization.startsWith('Bearer')) return next(Boom.unauthorized('Invalid token'))

  const { 1: token } = authorization.split(' ')

  if (!token) return next(Boom.unauthorized('Invalid token'))

  try {
    const data = verifyToken(token)
    const user = authService.getUserById(data.id)

    if (!user) return next(Boom.unauthorized('Invalid user'))

    req.user = user

    next()

  } catch (err) {
    console.log(err)
    return next(Boom.unauthorized('Invalid token'))
  }

}

module.exports = validateToken
