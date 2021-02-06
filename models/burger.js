const orm = require('../config/orm.js');

const burger = {
    all(cb) {
        orm.all('burgers', (res) => cb(res));
    };
};

module.export = burger;