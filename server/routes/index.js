var express = require('express');
var router = express.Router();
var auth = require('../helper/authentication')
/* GET home page. */

router.post('/login', auth.login);

router.post('/register', auth.register)

module.exports = router;
