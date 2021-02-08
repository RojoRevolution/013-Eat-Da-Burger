const orm = require('../config/orm.js');

const burger = {
    all(cb) {
        console.log('LOGGING FROM /models/burger.js');
        orm.all('burgers', (res) => cb(res));
    },
    create(cols, val, cb) {
        orm.create('burgers', cols, vals, (res) => cd(res));
    },
    update(objColVals, condition, cd) {
        orm.update('burgers', objColVals, condition, (res) => cb(res));
    },
};

module.export = burger;