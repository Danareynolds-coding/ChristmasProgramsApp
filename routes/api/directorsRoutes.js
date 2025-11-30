const router = require('express').Router();
const{directorsDao: dao} = require('../../daos/dao');
const axios = require('axios');

//1 page
router.get('/api/directors',(req ,res)=> {
  const url = 'http://api/directors'
  axios.get(url)
    .then(resp => {
      res.render('pages/DirectorsPage',{
        title:'Directors',
        name:'Directors',
        fName:'fName',
        lName: 'lName',
        Image:ImagePath,
        data:resp.data
      })
    })
})

//  2. form http://localhost:3000/directors-form
router.get('/directors-form', (req, res)=> {
    res.render('pages/directors-form', {
      title: 'Directors Form',
      name: 'Add a Director'
    })
})

//3 find all
//http://localhost:3000/api/directors
router.get('/',(req, res)=> {
  dao.findAll(res, dao.table)
})

// 4. sort htpp://localhost:3000/api/director/sort/:sort
router.get('/sort/:sorter', (req, res)=> {
  dao.sort(res, dao.table, req.params.sorter)
})
// 5 programByDirector  http://localhost:3000/api/directors/get_programsForDirector/?
router.get('/get_programsForDirector/:id', (req, res)=> {
  dao.findProgramsByDirectors(res, dao.table, req.params.id)
})
//6 ID
router.get('/:id', (req, res)=> {
  dao.findById(res, dao.table, req.params.id)
})
//7 post
router.post('/create', (req, res)=> {
  dao.create(req, res, dao.table)
})
//8 patch
router.patch('/update/:id', (req, res)=> {
  dao.update(req, res, dao.table)
})
  

module.exports = router