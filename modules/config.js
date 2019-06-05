var _ = require('lodash');

/* Default configuration.  */
let config = {
	port: 3000,
	secret: 'Ken sent me.',
	postOnly: false,
};

try {
	// Override default configuration.
	_.merge(config, require('../config'));
} catch(e) {
}

module.exports = config;