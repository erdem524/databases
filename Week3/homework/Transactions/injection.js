const mysql = require('mysql');
const connection = mysql.createConnection({
	host: 'localhost',
	user: 'hyfuser',
	password: 'hyfpassword',
	database: 'world',
	debug: false
});

connection.connect();

function getPopulation(Country, name, code, cb) {
	connection.query(
		`SELECT Population FROM ${Country} WHERE Name = +
			${connection.escape(name)}and code = +
			${connection.escape(code)};`,
		function(err, result) {
			if (err) cb(err);
			if (result.length == 0) cb(new Error('Not found'));
			cb(null, result[0].Population);
		}
	);
	connection.end();
}

getPopulation('Country', 'Netherlands', 'NLD', (error, results, fields) => {
	if (error) {
		throw error;
	}
	console.log(results);
});
