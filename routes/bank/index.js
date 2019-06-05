var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.locals.pageType = 'BANK';
	res.render('bank/index', { name: 'Alice', showMenu: true });
});

module.exports = router;
