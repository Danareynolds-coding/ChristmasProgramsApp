
const router = require('express').Router();
const{streamingDao: dao} = require('../../daos/dao');
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

// 2  http://localhost:3000/streaming-form
router.get('/streaming-form', (req, res)=> {
    res.render('pages/streaming-form', {
      title: 'Streaming Form',
      name: 'Add a Streaming Platform'
    })
})

//  3 http://localhost:3000/api/streaming
router.get('/',(req, res)=> {
  dao.findAll(res, dao.table)
})

//  4 http://localhost:3000/api/streaming/sort/:sort
router.get('/sort/:sorter', (req, res)=> {
  dao.sort(res, dao.table, req.params.sorter)
})
// 5 http://localhost:3000/api/streaming/get_programsForStreaming/?
router.get('/get_programsForStreaming/:id', (req, res)=> {
  dao.findStreaming(res, dao.table, req.params.id)
})

// 6
router.get('/:id', (req, res)=> {
  dao.findById(res, dao.table, req.params.id)
})
// 7
router.post('/create', (req, res)=> {
  dao.create(req, res, dao.table)
})
// 8
router.patch('/update/:id', (req, res)=> {
  dao.update(req, res,dao.table)
})
  
module.exports = router
