module.exports = () => {
	const mysql = require('mysql');
	const connection = mysql.createConnection({
		host: 'localhost',
		user: 'hyfuser',
		password: 'hyfpassword'
	});

	connection.connect();
	connection.query(`create database meetup`, function(error, results, fields) {
		if (error) {
			throw error;
		}
		console.log('the reply is ', results[0]);
	});

	connection.end();
};
