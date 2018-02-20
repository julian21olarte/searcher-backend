'use strict';
var express = require('express');
var router = express.Router();

//Api
var search = require('../api/search.api');

//Routes
//All users
router.get('/search/:text', search.getList);


module.exports = router;