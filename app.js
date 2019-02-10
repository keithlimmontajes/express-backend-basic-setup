const mysql = require('mysql');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

var app = express();

app.use(cors());

var connectiondb = mysql.createConnection({
    host:  'localhost',
    user: 'root',
    password: '',
    database: 'employeedb'
});

connectiondb.connect((err)=>{
    if(!err){
        console.log("connected");
    }else{
        console.log("connection failed");
    }
});


app.get('/employee', (req, res )=>{
    connectiondb.query('SELECT * FROM employee', (err, rows, field)=>{
        if(!err){
           res.send(rows);
        }else{
            console.log(err);
        }
    });
});

var PORT = 3000;
app.listen(PORT, ()=> {
    console.log(`express server running on port ${PORT}`);
});