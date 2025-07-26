const express=require('express');
const app=express();
const mysql=require('mysql2');
const cors=require('cors')


app.use(cors());


const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"employe"
})

db.connect(()=>{
    console.log("Database connected Seccessfully...!")
})




app.get('/emp',(req,res)=>{
    db.query("Select * from emploee",(err,result)=>{
        if(err) throw err;

        res.send(result);
    })
})

    


app.listen(3001,()=>{
    console.log("Your server is live");
})