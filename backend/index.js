const express=require('express')
const app=express();
const cors = require('cors')
const port=process.env.PORT||3001
const bodyParser=require('body-parser')
const mysql=require('mysql')

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors());

app.get('/',(req,res)=>{
    res.send('Hi world!')
})

//_____________________DATABASE_________________
app.use(express.json());
const conn=mysql.createConnection({
    host:'bcqp479udwqz62nmdf0v-mysql.services.clever-cloud.com',
    user:'uzdexamochtagwss',
    database:'bcqp479udwqz62nmdf0v',
    password:'xyuBgDdtI8GvV6TnKjhx'
})

app.get('/users',(req,res)=>{   
    let sql="SELECT * FROM chat";
    conn.query(sql,(err,result)=>{
        if(err){console.log(err);
        }else{res.send(result)}
    })
})

let qInsert="INSERT INTO `chat`(`name`, `text`, `tag`, `time`) VALUES ('BIKA','BIKA','#nodeJs','2023-08-16')"

    conn.query(qInsert,(err)=>{console.log(err);})

app.post('/create',(req,res)=>{
    const id=res.body.id;   
    const name=res.body.name;
    const text=res.body.text;
    const tag=res.body.tag;
    const time=res.body.time;

    let qInsert="INSERT INTO `chat`(`name`, `text`, `tag`, `time`) VALUES ('BIKA','BIKA','#nodeJs','2023-08-16')"

    conn.query(qInsert,(err)=>{console.log(err);})

    conn.query(qInsert,
        (err,result)=>{
            if (err){
                console.log(err);
            }else{
                res.send("Message is added!")
            }
        }
    )
})
 

app.listen(port,()=>{console.log(`App is started, port: ${port}`)})

