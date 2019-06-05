const express = require('express');
const router = express.Router();
const _ = require('lodash');
const config = require('../../modules/config');

let balance = 100000;
let transactions = [];

/* GET home page. */
router.get('/', (req, res, next) => {
	let data = initData();
	if (typeof req.query.recipient !== 'undefined'
	    && !config.postOnly) {
		handleTransaction(req.query, data);
	}
	res.render('bank/index', data);
});

router.post('/', (req, res, next) => {
	let data = initData();
	handleTransaction(req.body, data);
	res.render('bank/index', data);
});

function initData() {
	return {
		name: 'Alice',
		showMenu: 'true',
		balance: balance,
		transactions: transactions.reverse,
	};
}

function handleTransaction(form, data) {
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
		date: formatDate(new Date()),
	});

	balance -= amount;
	data.balance = balance;
	data.transactions = transactions.reverse();
}

function formatDate(date) {
	let formatted = 1900 + date.getYear()
		+ '-'
		+ _.padStart(date.getMonth(), 2, '0')
		+ '-'
		+ _.padStart(date.getDay(), 2, '0')
		+ ' '
		+ _.padStart(date.getHours())
		+ ':'
		+ _.padStart(date.getMinutes()
		+ ':'
		+ _.padStart(date.getSeconds()));

	return formatted;
}

module.exports = router;
