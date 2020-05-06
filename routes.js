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
    let sql = 'CREATE TABLE users(username VARCHAR(100) NOT NULL, password VARCHAR(100) NOT NULL, first_name VARCHAR(50) NOT NULL, last_name VARCHAR(50) NOT NULL, email VARCHAR(100) NOT NULL, PRIMARY KEY(username))';
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
    let sql = 'CREATE TABLE friends(username VARCHAR(100), friend_username VARCHAR(100))';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log('Friends table created...');
        res.send('Friends table created...');
    });
});

//Create friend requests table
app.get('/create_friend_requests_table', (req, res) => {
    let sql = 'CREATE TABLE friend_requests(username VARCHAR(100) NOT NULL, friend_username VARCHAR(100) NOT NULL)';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log('Friend Requests table created...');
        res.send('Friend Requests table created...');
    });
});

// Post Requests =====================================================================

//Register user
app.post('/register_user', (req, res) => {

    let user_data = { first_name: req.body.firstName, last_name: req.body.lastName, email: req.body.email, username: req.body.username, password: req.body.password };
    var sql = `SELECT * FROM users WHERE username ='${req.body.username}'`;

    db.query(sql, (err, result) => {
        if (err) throw err;
        // Check if account already exists
        if (result.length) {
            res.send({ 'accountExists': true });
        } else {

            sql = 'INSERT IGNORE INTO users SET ?';
            db.query(sql, credentials, (err, result) => {
                if (err) throw err;
            });

            console.log('New user ' + req.body.username + ' was successfully registered!')
            res.send({ 'accountExists': false });
        }
    });
});

// Validate user
app.post('/validate_user', function (req, res) {

    let sql = `SELECT username, email, first_name, last_name ` +
        `FROM users WHERE username ='${req.body.username}' AND password = '${req.body.password}'`;

    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(req.body.username + ' successfully logged in!');
        res.send(result);
    });
});

// Request friend
app.post('/request_friend', function (req, res) {

    let entry = { username: req.body.username, friend_username: req.body.friend_username };
    let sql = 'INSERT IGNORE INTO friend_requests SET ?';

    db.query(sql, entry, (err, result) => {
        if (err) throw err;
        console.log(req.body.username + ' sent friend request to ' + req.body.friend_username + '!');
        res.send(result);
    });
});

// Add friend
app.post('/add_friend', function (req, res) {

    let entry = { username: req.body.username, friend_username: req.body.friend_username };
    let sql = 'INSERT IGNORE INTO friends SET ?';

    db.query(sql, entry, (err, result) => {
        if (err) throw err;
        console.log('You are now friends with ' + req.body.username);
        res.send(result);
    });
});

// Remove friend request
app.post('/remove_friend_request', function (req, res) {
    console.log(req.body);
    sql = `DELETE FROM friend_requests WHERE username = '${req.body.username}' AND friend_username = '${req.body.friend_username}'`;
    db.query(sql, (err, result) => {
       if (err) throw error;
       res.send('Record has been deleted!');
     });
 });

// Get Requests =====================================================================

// Get users
app.get('/get_users', function (req, res) {
    let sql = 'SELECT * FROM users';
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

// Get user by id
app.get('/get_user_by_username', function (req, res) {
    let sql = `SELECT username, first_name, last_name FROM users WHERE username='${req.query.username}'`;
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

// Get friend requests
app.get('/get_friend_requests', function (req, res) {
    let sql = `SELECT username FROM friend_requests WHERE friend_username = '${req.query.username}'`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

// Starting our server.
app.listen(3000, () => {
    console.log('Go to http://localhost:3000 to see the data.');
});