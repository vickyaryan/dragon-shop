require('dotenv').config();
const express = require("express")
// const bodyparser = require("body-parser")
const mysql = require("mysql")
const session = require("express-session");
const bodyParser = require('body-parser');

// const {getData} = require('./getdata')
const app = express();
const PORT = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const pool = mysql.createPool({
    host: 'localhost',
    user: "root",
    password : '',
    database : "products",

})

app.get('/',(req,res)=>{
    
    pool.query(`select * from homepage1`,(error,result,fail)=>{
        if(error){
            // return error
            console.log(error);
        }
        res.set('Access-Control-Allow-Origin', '*');
        res.send(result);
    })
})

app.get('/:id',(req,res)=>{
    pool.query(`select * from homepage1 Where id=?`,[req.params.id] ,(error,result,fail)=>{
        if(error){
            // return error
            console.log(error);
        }
        res.set('Access-Control-Allow-Origin', '*');
        res.send(result);
    })
})

app.get('/product/:id',(req,res)=>{
    pool.query(`select * from homepage1 Where category=?`,[req.params.id] ,(error,result,fail)=>{
        if(error){
            // return error
            console.log(error);
        }
        res.set('Access-Control-Allow-Origin', '*');
        res.send(result);
    })
})

app.listen(PORT, ()=>{
    console.log('server Start');
})