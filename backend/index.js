

const express=require('express');
const app=express();
const mysql=require('mysql2');
const cors=require('cors')


app.use(cors());


const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"kale123",
    database:"growsskill"
})

db.connect(()=>{
    console.log("Database connected Seccessfully...!")
})

app.get('/courses',(req,res)=>{
    // db.query('SELECT c.courseID, c.courseName, c.courseImg, c.price, c.mrp, c.lectures, c.levels,l.languageID, l.Language,p.pointID, p.title,p.videoLink FROM Courses c LEFT JOIN CoursesLanguages cl ON c.courseID = cl.courseID LEFT JOIN Language l ON cl.languagesID = l.languageID LEFT JOIN Points p ON c.courseID = p.courseID;',
    db.query("Select * from courses",(err,result)=>{
        if (err) throw err;
        res.send(result);

    })

})

app.get('/courses1',(req,res)=>{
    // db.query('SELECT c.courseID, c.courseName, c.courseImg, c.price, c.mrp, c.lectures, c.levels,l.languageID, l.Language,p.pointID, p.title,p.videoLink FROM Courses c LEFT JOIN CoursesLanguages cl ON c.courseID = cl.courseID LEFT JOIN Language l ON cl.languagesID = l.languageID LEFT JOIN Points p ON c.courseID = p.courseID;'),
    db.query("Select * from courses1",(err,result)=>{
        if (err) throw err;
        res.send(result);

    })

})


app.listen(3000,()=>{
    console.log("Your server is running in 3000");
})
