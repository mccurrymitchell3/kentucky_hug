import credentials from './credentials.js';

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const db = mysql.createConnection({
  host     : credentials.mySqlHost,
  user     : credentials.mySqlUser,
  password : credentials.mySqlPassword,
  database : credentials.mySqlDatabase
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySql Connected...');
});

const app = express();
app.use(bodyParser.json())

//Get users
app.get('/get_users', function (req, res) {
    let sql = 'SELECT * FROM users';
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

//Get bottles
app.get('/get_bottles', function (req, res) {
    let sql = 'SELECT * FROM bottles';
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

// Starting our server.
app.listen(3000, () => {
    console.log('Go to http://localhost:3000 to see the data.');
});