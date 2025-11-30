
const express = require('express')              
const router = express.Router()                 

const {programsDao: dao} = require('../../daos/dao') 
const { table } = require('../../daos/api/programsDao')
//1 a page
router.get('/api/programs', (req, res) => {
    dao.findAll({
    json: (programs) => {
      const programsArr = Array.isArray(programs) ? programs : [programs];
      res.render('pages/ProgramsPage', {
        name: 'Programs',
        title: programsArr[0]?.title || '',
        image: programsArr[0]?.posterURL || '',
        description: programsArr[0]?.description || '',
        rating: programsArr[0]?.rating || '',
        animationType: programsArr[0]?.animationType || '',
        runtime: programsArr[0]?.runtime || '',
        yr_released: programsArr[0]?.yr_released || '',
        budget: programsArr[0]?.budget || '',
        grossProfit: programsArr[0]?.grossProfit || '',
        showing: programsArr[0]?.showing || '',
        fivePointRating: programsArr[0]?.fivePointRating || '',
        data: programsArr
      });
    }
  }, dao.table);
});


// 2.form  http://localhost:3000/programs/api/programs/form
router.get('/form', (req, res)=> {
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
// 1 b Single Program
router.get('/api/programs/:id', (req, res) => {
  dao.findById(null, dao.table, req.params.id)
    .then(data => {
      res.render('pages/ProgramsPage', {
        name: 'Programs',
        title: data.title,
        rating: data.rating,
        animationType: data.animationType,
        runtime: data.runtime,
        yr_released: data.yr_released,
        productionCo: data.productionCo,
        budget: data.budget,
        grossProfit: data.grossProfit,
        showing: data.showing,
        image: data.posterURL,
        description: data.description,
        fivePointRating: data.fivePointRating,
        data: data
      });
    })
    .catch(err => {
      res.status(500).send('Error fetching program');
    });
});
// 7 POST
router.post('/create',(req, res)=> {
  dao.create(req, res, dao.table)
})

//8 PATCH
router.patch('/update/:id', (req, res)=> {
  dao.update(req, res,dao.table)
})
                                                

module.exports = router                         

