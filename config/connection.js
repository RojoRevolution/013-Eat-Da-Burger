var mysql = require('mysql');
require('dotenv').config();

// let host = process.env.host;

var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    mysql.createConnection({
        host: process.env.host,
        port: 3306,
        user: process.env.user,
        // NOTE: Be sure to add your MySQL password here!
        password: process.env.password,
        database: process.env.database,
    });
};

connection.connect()

// connection.connect((err) => {
//     if (err) {
//         console.error(`error connecting: ${err.stack}`);
//         return;
//     }
//     console.log(`connected as id ${connection.threadId}`);
// });

module.exports = connection;