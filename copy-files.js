#! /usr/bin/env node

const fs = require('fs');

fs.copyFile('node_modules/jquery/dist/jquery.min.js',
			'public/javascripts/jquery.min.js',
			(err) => {
				if (err) throw err;
			}
);
