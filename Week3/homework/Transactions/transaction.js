const mysql = require('mysql');

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'hyfuser',
	password: 'hyfpassword',
	database: 'transact'
});
connection.beginTransaction(function(err) {
	if (err) {
		throw err;
	}
	const transfer = 1000;
	const acnt1 = 101;
	const acnt2 = 102;
	const queries = [
		`update account set balance =  balance - ${transfer} where acnt_no = ${acnt1};`,
		`update account set balance =  balance + ${transfer} where acnt_no = ${acnt2};`,
		`update account_changes  set amount = amount - ${transfer} where acnt_no = ${acnt1};`,
		`update account_changes  set amount = amount + ${transfer} where acnt_no = ${acnt2};`
	];
	connection.query(queries[0], function(error, results, fields) {
		if (error) {
			return connection.rollback(function() {
				throw error;
			});
		}
		connection.query(queries[1], function(error, results, fields) {
			if (error) {
				return connection.rollback(function() {
					throw error;
				});
			}
			connection.query(queries[2], function(error, results, fields) {
				if (error) {
					return connection.rollback(function() {
						throw error;
					});
				}
			});

			connection.query(queries[3], function(error, results, fields) {
				if (error) {
					return connection.rollback(function() {
						throw error;
					});
				}
			});
			connection.commit(function(err) {
				if (err) {
					return connection.rollback(function() {
						throw err;
					});
				}
				console.log('success!');
			});
			console.log(results);
		});
	});
});
