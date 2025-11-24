
const express = require('express')
const router = express.Router()
const PORT = process.env.PORT

// rootroute http://localhost:3000/api
router.get('/api', (req, res) => {
  res.json({
    'Programs':`http://localhost:${PORT}/api/programs`
  })
})
// ('programschristmasdb api')//

// error handling
router.use((req, res, next)=> {
  res.status(404)
  .send('<h1>404 Error This page does not exist!</h1>')
})
module.exports = router