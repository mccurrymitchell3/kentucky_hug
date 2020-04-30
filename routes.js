const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const credentials = require('./credentials');

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

// Create tables =====================================================================

// Create users table
app.get('/create_users_table', (req, res) => {
    let sql = 'CREATE TABLE users(user_id VARCHAR(36), first_name VARCHAR(50), last_name VARCHAR(50), PRIMARY KEY(user_id))';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log('Users table created...');
        res.send('Users table created...');
    });
});


// Create bottles table
app.get('/create_bottles_table', (req, res) => {
    let sql = 'CREATE TABLE bottles(bottle_id VARCHAR(36), name VARCHAR(100), distillery VARCHAR(100), price DECIMAL(7,2), rating DECIMAL(3,2), location VARCHAR(200), PRIMARY KEY(bottle_id))';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log('Bottles table created...');
        res.send('Bottles table created...');
    });
});

// Create friends table
app.get('/create_friends_table', (req, res) => {
    let sql = 'CREATE TABLE friends(user_id VARCHAR(36), friend_id VARCHAR(36))';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log('Friends table created...');
        res.send('Friends table created...');
    });
});


// Get users
app.get('/get_users', function (req, res) {
    let sql = 'SELECT * FROM users';
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

// Get user by id
app.get('/get_user_by_id', function (req, res) {
    let sql = `SELECT * FROM users WHERE user_id='${req.query.user_id}'`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
})

// Get bottles
app.get('/get_bottles', function (req, res) {
    let sql = 'SELECT * FROM bottles';
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

// Get friends
app.get('/get_friends', function (req, res) {
    let sql = `SELECT friend_id FROM friends WHERE user_id = '${req.query.user_id}'`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

// Starting our server.
app.listen(3000, () => {
    console.log('Go to http://localhost:3000 to see the data.');
});