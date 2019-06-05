const express = require('express');
const router = express.Router();
const _ = require('lodash');
const config = require('../../modules/config');

let balance = 100000;
let transactions = [];

/* GET home page. */
router.get('/', (req, res, next) => {
	let data = {
		name: 'Alice',
		showMenu: 'true',
		balance: balance,
	};
console.log('recipient? ', req.query);
	if (typeof req.query.recipient !== 'undefined'
	    && !config.postOnly) {
		handleTransaction(req.query, data);
	}
	res.render('bank/index', data);
});

router.post('/', (req, res, next) => {
	let data = {
		name: 'Alice',
		showMenu: 'true',
		balance: balance,
	};
	handleTransaction(req.body, data);
	res.render('bank/index', data);
});

function handleTransaction(form, data) {
	console.log(form);
	const recipient = _.trim(form.recipient);
	if (recipient === '') {
		data.errorMsg = 'Recipient missing!';
		return;
	}
	const amount = parseInt(form.amount);
	if (amount === NaN || amount < 1) {
		data.errorMsg = 'Invalid amount!';
		return;
	}

	transactions.push({
		recipient: recipient,
		amount: amount,
		date: new Date(),
	});

	balance -= amount;
	data.balance = balance;

	console.log('new balance: ' + balance);
}

module.exports = router;
