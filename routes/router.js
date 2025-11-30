// ('programschristmasdb api')//
const express = require('express') //+
const router = express.Router()    //+
const PORT = process.env.PORT || 3000 //+
const axios = require('axios')
router.use(express.static('public')) //+
// Redirect form routes to correct entity route files
router.get('/actors/form', (req, res) => res.redirect('/api/actors/form'));
router.get('/directors/form', (req, res) => res.redirect('/api/directors/form'));
router.get('/genre/form', (req, res) => res.redirect('/api/genre/form'));
router.get('/productionCo/form', (req, res) => res.redirect('/api/productionCo/form'));
router.get('/streaming/form', (req, res) => res.redirect('/api/streaming/form'));

// rootroute http://localhost:3000/api
router.get('/api', (req, res)=> {
  res.json({
  'Programs':`http://localhost:${PORT}/api/programs`,
  'Actors': `http://localhost:${PORT}/api/actors`,
  'Directors':`http://localhost:${PORT}/api/directors`,
  'ProductionCo':`http://localhost:${PORT}/api/productionCo`,
  'Genre': `http://localhost:${PORT}/api/genre`,
  'Streaming': `http://localhost:${PORT}/api/streaming` 
  })
})

// router.use('/api/programs', require('./api/programsRoutes'))
const endpoints = [
  'programs',
   'actors',
   'directors',
   'genre',
   'productionCo',
   'streaming'
]
endpoints.forEach(endpoint => {
  router.use(`/api/${endpoint}`, require(`./api/${endpoint}Routes`))
})

//HomePage =  localhost:3000
router.get('/', (req, res)=> {
    res.render('pages/home', {
      title: 'Christmas Movies and TV Programs',
      name:"Christmas Programs"
    })
})
// error handling
router.use((req, res, next)=> {
  res.status(404)
  .render('pages/404', {
    title:'404 - Page Not Found',
    name: '404 - Page Not Found'
  })
})
module.exports = router //+