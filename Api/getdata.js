const { createPool } = require('mysql')

const getData = () =>{
    const pool = createPool({
        host: 'localhost',
        user: "root",
        password : '',
        database : "products",
    
    })
    pool.query(`select * from homepage1`,(error,result,fail)=>{
        if(error){
            return error
        }
        return result
    })

}
export  {getData}