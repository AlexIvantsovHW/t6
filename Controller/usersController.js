'use strict'
const response=require('../backend/response')
// DataBase
//----------------------------------------------------------------
const mysql=require('mysql')
const conn=mysql.createConnection({
    host:'bcqp479udwqz62nmdf0v-mysql.services.clever-cloud.com',
    port:'3306',
    user:'uzdexamochtagwss',
    password:'xyuBgDdtI8GvV6TnKjhx',
    database:'bcqp479udwqz62nmdf0v'
})
conn.connect((error)=>{
    if(error){
        return console.log('Error during connection to DB');
    }else{
        return console.log('Connection to DB is completed successfully');
    }
})
//----------------------------------------------------------------

exports.users=(req,res)=>{
    conn.query('SELECT * FROM `chat`',(error,rows,fields)=>{
        if(error){
            console.log(error)
        }else{
            response.status(rows,res)
        }
    })
}
/* 
exports.add=(req,res)=>{
    const sql="INSERT INTO `chat` (`id`,`name`,`text`,`tag`,`time`) VALUES ('"+req.query.id+"','"+req.query.name+"','"+req.query.text+"','"+req.query.tag+"','"+req.query.time+"')";
    conn.query(sql,(error,rows,fields)=>{
        if(error){
            console.log(error)
        }else{
            response.status(rows,res)
        }
    })
    console.log(req.query);

} */