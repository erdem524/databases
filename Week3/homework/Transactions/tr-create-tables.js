const util = require('util');
const mysql = require('mysql');
const tr_insert_values = require('./tr-insert-values');
const account = tr_insert_values.account;
const account_changes = tr_insert_values.account_changes;
const connection = mysql.createConnection({
	host: 'localhost',
	user: 'hyfuser',
	password: 'hyfpassword'
});

const execQuery = util.promisify(connection.query.bind(connection));

async function seedDatabase() {
	const create_database = `CREATE DATABASE IF NOT EXISTS transact;`;
	const use_database = `use transact`;
	const CREATE_ACCOUNT_TABLE = `create table account(acnt_no int, balance int, primary key (acnt_no));`;
	const CREATE_Changes_TABLE = `create table account_changes(chng_no int primary key, acnt_no int,
         amount int, changed_date date,remark varchar(100),
         FOREIGN KEY(acnt_no) REFERENCES account(acnt_no));`;

	connection.connect();

	try {
		// call the function that returns promise
		await execQuery(create_database);
		await execQuery(use_database);
		await execQuery(CREATE_ACCOUNT_TABLE);
		await execQuery(CREATE_Changes_TABLE);
		account.forEach(async (acnt) => {
			await execQuery('INSERT INTO ACCOUNT SET ?', acnt);
		});
		account_changes.forEach(async (chng) => {
			await execQuery('INSERT account_changes SET ?', chng);
		});
	} catch (error) {
		console.error(error);
	}

	connection.end();
}

seedDatabase();
