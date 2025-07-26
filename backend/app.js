const express=require('express');
const app=express();
const mysql=require('mysql2');
const cors=require('cors')


app.use(cors());


const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"kale123",
    database:"employee"
})

db.connect(()=>{
    console.log("Database connected Seccessfully...!")
})

app.get('/employees',(req,res)=>{
    
    db.query(`Select * from employees where Passwords='123'AND location='pune'`,(err,result)=>{
    if (err) throw err;
    res.send(result);
   })
        
    })




app.listen(3000,()=>{
    console.log("Your server is running in 3000");
})
