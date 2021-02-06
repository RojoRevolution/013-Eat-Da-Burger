const express = require('express');

const router = express.Router();

// This will be the Database functions that use the ORMs
// const cat = require('../models/cat.js');

router.get('/', (req, res) => {
    // cat.all((data) => {
    //   const hbsObject = {
    //     cats: data,
    //   };
    //   console.log('hbsObject', hbsObject);
    //   res.render('index', hbsObject);
    // });
    res.send("WORKING")

});


module.exports = router;