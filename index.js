'use strict'

const initApp = require('./src/app')

const app = initApp()

app.listen(3000, () => console.log('server runing on port 3000'));
