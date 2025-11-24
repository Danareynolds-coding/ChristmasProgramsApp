// dao  data access object
// daoCommon holds methods that all other tables can use//
const connect = require('../config/dbconfig')
const daoCommon ={
    //querry database methods 2args 1.sqlquery 2.callback function 
    findAll:(req, res, table)=> {
      connect.query(
        `SELECT * FROM ${table};`,        //sql query
        (error, rows)=> {                 //callback funtion
          if(!error) {
            if(rows.length === 1){
              res.json(...rows)
            }else{
              res.json(rows)
            }
          }else{
            console.log(`Dao Error:${error}`)
            res.json({
              "message":'error',
              'table': `${table}`,
              'error': error
            })
          }
        }                  
      )
    }

}

module.exports.daoCommon