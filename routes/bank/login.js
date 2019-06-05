var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
	res.render('bank/login', { title: 'Login' });
});
router.post('/', (req, res, next) => {
	const body = req.body;
	if (body.username === 'admin' && body.password === 'admin') {
		req.session.name = 'admin';
		res.redirect('/bank');
	} else {
		res.render('bank/login', { title: 'Login', errorMsg: 'Login failure!' })
	}
	console.log(req.body);
});

module.exports = router;
