
const router = require('express').Router();
const{actorsDao: dao} = require('../../daos/dao');
const axios = require('axios');

//1. page
router.get('/api/actors',(req ,res)=> {
  const url = 'http://api/actors'
  axios.get(url)
    .then(resp =>{
      res.render('pages/ActorsPage',{
        title:'Actors',
        name:'Actors',
        data:resp.data
      })
    })
})

// 2.form  http://localhost:3000/actors-form
router.get('/actors-form', (req, res)=> {
    res.render('pages/actors-form', {
      title: 'Actors Form',
      name: 'Add an Actor'
    })
})

// 3.all  http://localhost:3000/api/actors
router.get('/',(req, res)=> {
  dao.findAll(res, dao.table)
})

// 4.sort  htpp://localhost:3000/api/actors/sort/:sort
router.get('/sort/:sorter', (req, res)=> {
  dao.sort(res, dao.table, req.params.sorter)
})


// 5 programByActor  http://localhost:3000/api/actors/get_ProgramsForActors/?By
router.get('/get_programsForActors/:id', (req, res)=> {
  dao.findProgramsByActors(res, dao.table, req.params.id)
})

//  6.ID http://api/actor/?
router.get('/:id', (req, res)=> {
  dao.findById(res, dao.table, req.params.id)
})
// 7.POST  http://localhost:3000/api/actor/create
router.post('/create',(req, res)=> {
  dao.create(req, res, dao.table)
})

//8. PATCH
http://localhost:3000/
router.patch('/update/:id', (req, res)=> {
  dao.update(req, res,dao.table)
})
  


module.exports = router
