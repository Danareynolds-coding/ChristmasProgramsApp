const router = require('express').Router();
const {productionCoDao: dao} = require('../../daos/dao');
const axios = require('axios');

//1. page
router.get('/api/productionCo',(req ,res)=> {
  const url = 'http://api/productionCo'
  axios.get(url)
    .then(resp =>{
      res.render('pages/ProductionCoPage',{
        title:'ProductionCo List',
        name:'ProductionCo List',
        ProductionCo:'productionCo',
        data:resp.data
      })
    })
})

// 2 http://localhost:3000/productionCo-form
router.get('/productionCo-form', (req, res)=> {
    res.render('pages/productionCo-form', {
      title: 'PRODUCTION COMPANY FORM',
      name: 'Add a Production Company'
    })
})
 //  3 http://localhost:3000/api/productionCo
router.get('/', (req, res)=> {
  dao.findAll(res, dao.table)
  })

  //  4 htpp://localhost:3000/api/production/sort/:sort
router.get('/sort/:sorter', (req, res)=> {
  dao.sort(res, dao.table, req.params.sorter)
})
//5
router.get('/get_programsForProductionCo/:id', (req, res)=> {
  dao.findProgramsByProductionCo(res, dao.table, req.params.id)
})

//6
router.get('/:id', (req, res)=> {
  dao.findById(res, dao.table, req.params.id)
})
//7
router.post('/create', (req, res)=> {
  dao.create(req, res, dao.table)
})
//8
router.patch('/update/:id', (req, res)=> {
  dao.update(req, res,dao.table)
})

 module.exports = router
