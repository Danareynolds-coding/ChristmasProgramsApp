
const router = require('express').Router();
const{genreDao: dao} = require('../../daos/dao');
const axios = require('axios');

//1. page
router.get('/api/genre',(req ,res)=> {
  const url = 'http://api/genre'
  axios.get(url)
    .then(resp =>{
      res.render('pages/GenrePage',{
        title:'Genre List',
        name:'Genre List',
        data:resp.data
      })
    })
})

//2 http://localhost:3000/genre-form
router.get('/genre-form', (req, res)=> {
    res.render('pages/genre-form', {
      title: 'Genre Form',
      name: 'Add a Genre'
    })
})

// 3 http://localhost:3000/api/genre
router.get('/',(req, res)=> {
  dao.findAll(res, dao.table)
})

// 4 htpp://localhost:3000/api/genre/sort/:sort
router.get('/sort/:sorter', (req, res)=> {
  dao.sort(res, dao.table, req.params.sorter)
})
// 5  http://localhost:3000/api/genre/get_programsForGenre/?
router.get('/get_programsForGenre/:id', (req, res)=> {
  dao.findProgramsByGenre(res, dao.table, req.params.id)
})
//ID
router.get('/:id', (req, res)=> {
  dao.findById(res, dao.table, req.params.id)
})
// 7 post
router.post('/create', (req, res)=> {
  dao.create(req, res, dao.table)
})
// 8 patch
router.patch('/update/:id', (req, res)=> {
  dao.update(req, res, dao.table)
})
  
module.exports = router