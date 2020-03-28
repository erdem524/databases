const util = require('util');
const mysql = require('mysql');

// const tr_insert_values = require('./tr-insert-values');
// const account = tr_insert_values.account;
// const account_changes = tr_insert_values.account_changes;

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'hyfuser',
	password: 'hyfpassword',
	database: 'transact'
});

const execQuery = util.promisify(connection.query.bind(connection));

async function transaction(acnt1, acnt2, transfer) {
	const startTransaction = `start transaction;`;
	const setCommit = `SET autocommit=0;`;

	const sent = `update account  set balance = balance - ${transfer} where acnt_no = ${acnt1};`;
	const received = `update account  set balance = balance + ${transfer} where acnt_no = ${acnt2};`;
	const transferChange1 = `update account_changes  set amount = amount - ${transfer} where acnt_no = ${acnt1};`;
	const transferChange2 = `update account_changes  set amount = amount + ${transfer} where acnt_no = ${acnt2};`;

	const done = `commit;`;

	connection.connect();

	try {
		// call the function that returns promise
		await execQuery(startTransaction);
		await execQuery(setCommit);
		await execQuery(sent);
		await execQuery(received);
		await execQuery(transferChange1);
		await execQuery(transferChange2);
		await execQuery(done);
	} catch (error) {
		console.error(error);
	}
	connection.end();
}

transaction(101, 102, 100);
