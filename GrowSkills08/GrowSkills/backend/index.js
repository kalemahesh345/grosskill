const express = require('express');
const app = express();
const mysql = require('mysql2');
const cors = require('cors');


app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "growskills"
})

db.connect(() => {
    console.log("Database connected Successfully")
})


app.get('/courses', (req, res) => {
    db.query('select * from courses', (err, result) => {
        if (err) throw err;

        res.send(result)
    })
})


app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    // const {id}= req.query;
    // const name=req.params.name;
    db.query('select * from courses where courseid=?', [id], (err, result) => {
        if (err) throw err;

        res.send(result[0])
    })
})


app.listen(3000, () => {
    console.log("Your application is running on port 3000")
})
