var express = require('express');
var router = express.Router();

function logout(req, res, next) {
	req.session.destroy();
	res.redirect('/bank/login');
}
router.get('/', logout);
router.post('/', logout);

module.exports = router;
