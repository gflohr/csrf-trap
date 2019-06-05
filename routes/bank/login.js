var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
	res.render('bank/login', { title: 'Login' });
});
router.post('/', (req, res, next) => {
	res.send('todo');
});

module.exports = router;
