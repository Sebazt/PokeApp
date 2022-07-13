'use strict';

const { verify } = require('jsonwebtoken');
const {verifyToken} = require('../utils/token')
const authSerice = require('../services/userServices')
const Boom = require('@hapi/boom')


function validateToken(req, res, next) {
  const { authorization } = req.headers; //headers es un objeto

  if (req.url === '/auth/login') {
    return next(Boom.unauthorized("Invalid Token"));
  }

  if (!authorization) {
    return next(Boom.unauthorized("Invalid Token"));
  }

  if (authorization.startsWith('Bearer')) {
    return next(Boom.unauthorized("Invalid Token"));
  }

  const { 1: token } = authorization.split(' ');

  if (!token) {
    return next(Boom.unauthorized("Invalid Token"));
  }

  try{
    const data = verifyToken(token)
    const user = authSerice.getUserById(data.id / 150)

    if (!user){
      return res.status(401).send('Unauthoraized');
    }

    req.user = user
    next()
  }catch(err){
    return res.status(401).send('Unauthoraized');
  }
}

module.exports = validateToken;
