
const express = require('express')              
const router = express.Router()                 

const {programsDao: dao} = require('../../daos/dao') 
const { table } = require('../../daos/api/programsDao')
//1 page
router.get('/api/programs',(req ,res)=> {
  const url = 'http://api/programs'
  axios.get(url)
    .then(resp =>{
      res.render('pages/ProgramsPage',{
        title:'Programs',
        name:'Programs',
        data:resp.data
      })
    })
})

// 2.form  http://localhost:3000/programs-form
router.get('/programs-form', (req, res)=> {
    res.render('pages/programs-form', {
      title: 'Programs Form',
      name: 'Add an Program'
    })
})

// 3 http://localhost:3000/api/programs
router.get('/', (req, res)=> {                  
    dao.findAll(res, dao.table)            
}) 

//4
router.get('/sort/:sorter', (req, res)=> {    
    dao.sort(res, dao.table, req.params.sorter)
})   

http://localhost:3000/api/programs/with_actors
router.get('/with_actors', (req, res)=> {
    dao.findProgramsWithActors(res, dao.table)
})
// http://localhost:3000/api/movie/with_genres
router.get('/with_genres', (req, res)=> {
    dao.findProgramsWithGenres(res, dao.table)
})
//http://localhost:3000/api/movie/get_movieDirector/?
router.get('/get_programsDirector/:id',(req, res)=> {
    dao.findProgramsByDirectorId(res, dao.table, req.params.id)
})

router.get('/get_programsActor/:id', (req, res)=>{
    dao.findProgramsByActorId(res, dao.table, req.params.id)
})
router.get('/get_movieProduction/:id',(req, res)=> {
    dao.FindProgramsProduction(res, dao.table)
})                                       

//  6 http://localhost:3000/api/:id
router.get('/:id', (req, res)=> {               
    dao.findById(res, dao.table, req.params.id)          
})  
// 7 POST
router.post('/create',(req, res)=> {
  dao.create(req, res, dao.table)
})

//8 PATCH
router.patch('/update/:id', (req, res)=> {
  dao.update(req, res,dao.table)
})
                                                

module.exports = router                         

