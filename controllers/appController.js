const express = require('express');

const router = express.Router();

// This will be the Database functions that use the ORMs
const burger = require('../models/burger.js');

router.get('/', (req, res) => {
    burger.all((data) => {
        const hbsObject = {
            burgers: data,
        };
        console.log('hbsObject', hbsObject);
        res.render('index', hbsObject);
    });
    // res.render('index')
});

module.exports = router;