const express = require('express');
const router = express.Router();
const locations = require("../locations.json");
require('dotenv').config({path: `${locations.env}`});
const port = process.env.PORT || '3000';


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: "welcome", msg: "this is the homepage"});
});

router.get('/ip', (req, res) => {
    res.render('index', {title: req.ip});
});



module.exports = router;
