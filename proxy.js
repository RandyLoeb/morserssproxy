// https://github.com/Rob--W/cors-anywhere
// Listen on a specific host via the HOST environment variable
const host = process.env.HOST || '192.168.0.135'
// Listen on a specific port via the PORT environment variable
const port = process.env.PORT || 8085

const corsProxy = require('cors-anywhere')

corsProxy.createServer({
  originWhitelist: [], // Allow all origins
  requireHeader: ['origin', 'x-requested-with'],
  removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, function () {
  console.log('Running CORS Anywhere on ' + host + ':' + port)
})
