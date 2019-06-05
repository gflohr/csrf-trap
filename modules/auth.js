
module.exports = function(req, res, next) {
	let reqPath = req.path;
	const prefix = reqPath.substring(0, 6);
	if (prefix !== '/bank' || prefix !== '/')
		next();

	if (reqPath === '/bank/login') {
		console.log('method: ' + req.method);
	}
};