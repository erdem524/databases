const mysql = require('mysql');
const connection = mysql.createConnection({
	host: 'localhost',
	user: 'hyfuser',
	password: 'hyfpassword',
	database: 'world'
});

const select_query = [
	'SELECT name, population FROM country WHERE population > 8000000',
	'SELECT name FROM country WHERE name LIKE "%land%"',
	'SELECT name, population FROM city WHERE population BETWEEN 500000 AND 1000000',
	'SELECT name FROM country WHERE continent  = "Europe"',
	'SELECT name,SurfaceArea FROM country ORDER BY SurfaceArea DESC ',
	'SELECT name FROM city WHERE CountryCode = "NLD"',
	'SELECT name,Population FROM city WHERE name = "Rotterdam"',
	'SELECT name,SurfaceArea FROM country ORDER BY SurfaceArea DESC LIMIT 10 ',
	'SELECT name,Population FROM city ORDER BY Population DESC LIMIT 10 ',
	'SELECT SUM(Population) AS "population number of the world" FROM country '
];

for (let i in select_query) {
	console.log('Going to run ', select_query[i]);
	connection.query(select_query[i], function(error, results, fields) {
		if (error) {
			throw error;
		}
		console.log('the reply is ', results);
	});
}
connection.end();
