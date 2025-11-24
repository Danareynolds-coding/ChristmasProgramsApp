// ('programschristmasdb api')//
const express = require('express')
const router = express.Router()
const PORT = process.env.PORT || 3000

// rootroute http://localhost:3000/api
router.get('/api', (req, res)=> {
  res.json({
    'All Programs':`http://localhost:${PORT}/api/programs`
  })
})

router.use('/api/programs', require('./api/programsRoutes'))

// error handling
router.use((req, res, next)=> {
  res.status(404)
  .send('<h1>404 Error This page does not exist!</h1>')
})
module.exports = router