'use strict'

const authService = require('../services/userServices')

class Auth {
  constructor() { }

  static login(req, res) {

    try {
      const token = authService.login(req.body)
      return res.send(token)

    } catch (err) {
      const regex = new RegExp('Invalid signature', 'g')
      const regexUser = new RegExp('Not found', 'g')
      if (regex.test(err.message)) {
        return res.status(401).send('Unauthorized')
      }

      if (regexUser.test(err.message)) {
        return res.status(404).send('Not found')
      }
    }

  }
}

module.exports = Auth
