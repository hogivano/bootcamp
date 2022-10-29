const http = require('http')

const requestListener = function (req, res) {
  // console.log('request', req.getHeaders())
  switch(req.url) {
    case '/':
      res.writeHead(200)
      res.end('Hello, World!')
      break
    case '/test': 
      res.setHeader('Content-type', 'application/json')
      res.writeHead(200)
      res.end(JSON.stringify({
        message: 'This is a test!'
      }))
      break
    default: 
      res.writeHead(404)
      res.end('Not found')
      break
  }
}

const server = http.createServer(requestListener)
server.listen(8008, 'localhost', () => {
  console.log('Server is running...')
})