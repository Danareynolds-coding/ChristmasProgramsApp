const express = require('express')
const server = express()
const PORT = process.env.PORT || 3000

const cors = require('cors')
const helmet = require('helmet')
server.use(cors())
server.use(helmet.contentSecurityPolicy({
  useDefaults: true,
  crossOriginsResourcePolicy:false,
  crossOriginsEmbedderPolicy:false,
  diectives: {
    "img-src":["'self'", "https: data"],
    "scriptSrc":["'self'", "cdn.jsdelivr.net"]
  }
}))
server.use(express.json())
server.use(express.urlencoded({extended: true}))
server.listen(PORT, ()=> console.log(`Merry Christmas!!! at port {PORT}`))