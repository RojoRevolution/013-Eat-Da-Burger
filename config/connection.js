const mysql = require('mysql');

const connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        // NOTE: Be sure to add your MySQL password here!
        password: '-',
        database: 'burger_app_db',
    });
};

connection.connect((err) => {
    if (err) {
        console.error(`error connecting: ${err.stack}`);
        return;
    }
    console.log(`connected as id ${connection.threadId}`);
});

module.exports = connection;