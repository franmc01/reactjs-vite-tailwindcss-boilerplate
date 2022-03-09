const { register } = require('esbuild-register/dist/node')
register({
  target: 'node14'
})
module.exports = require('./main.ts')
