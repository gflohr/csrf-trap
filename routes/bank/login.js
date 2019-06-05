var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('bank/login', { title: 'Login' });
});

module.exports = router;
