const connection = require('./connection.js');

const printQuestionMarks = (num) => {
    const arr = [];

    for (let i = 0; i < num; i++) {
        arr.push('?');
    }

    return arr.toString();
};

const objToSql = (ob) => {
    const arr = [];
    for (const key in ob) {
        let value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === 'string' && value.indexOf(' ') >= 0) {
                value = `'${value}'`;
            }
            arr.push(`${key}=${value}`);
        }
    }
    return arr.toString();
};

// ORM 
const orm = {
    all(tableInput, cb) {
        console.log('LOGGING FROM /config/orm.js');
        const query = `SELECT * FROM ${tableInput}`;
        connection.query(query, (err, result) => {
            if (err) throw err
            cb(result)
        });
    },
};

module.exports = orm;