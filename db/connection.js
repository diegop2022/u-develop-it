const mysql = require('mysql2');

//Connect to database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '2705Diego*',
    database: 'election'
});

module.exports = db;