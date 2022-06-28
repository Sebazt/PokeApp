const express = require('express');
const bodyparser = require('body-parser')

const server = express()

// const PORT = process.env.PORT || 3000

server.listen(3000,() => console.log('PokeServer runing on port 3000 '))