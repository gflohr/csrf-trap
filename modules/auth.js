
module.exports = function(req, res, next) {
	if (typeof req.session.name !== 'undefined'
		|| req.path === '/bank/login'
		|| req.path === '/bank/logout') {
		return next();
	}

	let reqPath = req.path;
	const prefix = reqPath.substring(0, 6);
	if (prefix !== '/bank' && prefix !== '/bank/') {
		return next();
	}

	res.redirect('/bank/login');
};