// /*
//   4. Create an Express web server, using Express.js. When the server is running...
//     a) Create a connection to your existing MySQL database, userdb
//     b) Create a table, called “Database Teachers” (with a single column, teacher_name)
//     c) Insert into the table 4 values: "Unmesh", "Dan", "Mona", "Cecile"
//     d) Retrieve from the table the value "Unmesh", and log it to the console

//   Use JavaScript comments to explain, line by line, what’s happening.
// */

// const util = require('util');

// const express = require('express'),
// 	app = express(),
// 	bodyParser = require('body-parser');
// port = process.env.PORT || 3000;

// const mysql = require('mysql');
// // connection configurations
// const connection = mysql.createConnection({
// 	host: 'localhost',
// 	user: 'hyfuser',
// 	password: 'hyfpassword',
// 	database: 'userdb'
// });

// const execQuery = util.promisify(connection.query.bind(connection));
// async function seedDatabase() {
// 	const CREATE_teachers_table = `
//     CREATE TABLE IF NOT EXISTS teachers (
//       teacher_name VARCHAR(50),
//     );`;

// 	const teacherss = [
// 		{
// 			teachers_name: 'Unmesh'
// 		},
// 		{
// 			teachers_name: 'Dan'
// 		},
// 		{
// 			teachers_name: 'Mona'
// 		},
// 		{
// 			teachers_name: 'Cecile'
// 		}
// 	];

// 	// connect to database
// 	connection.connect();

// 	try {
// 		// call the function that returns promise

// 		console.log(`
//         .
//         .
//         .
//         .
//         .
//         .`);
// 		await execQuery(CREATE_teachers_table);
// 		teachers.forEach(async (teacher) => {
// 			await execQuery('INSERT INTO teachers SET ?', teacher);
// 		});
// 	} catch (error) {
// 		console.error(error);
// 	}

// 	connection.end();
// }

// seedDatabase();

// app.listen(port);

// console.log('API server started on: ' + port);

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// var routes = require('./app/routes/approutes'); //importing route
// routes(app); //register the route

const express = require('express'),
	app = express(),
	bodyParser = require('body-parser');
port = process.env.PORT || 3000;
const util = require('util');
const mysql = require('mysql');
// connection configurations

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'hyfuser',
	password: 'hyfpassword',
	database: 'userdb'
});

const execQuery = util.promisify(connection.query.bind(connection));

/*  */
async function seedDatabase() {
	const CREATE_teachers_table = `
    CREATE TABLE IF NOT EXISTS teachers (
      teacher_name VARCHAR(50),
 );`;

	const teacherss = [
		{
			teachers_name: 'Unmesh'
		},
		{
			teachers_name: 'Dan'
		},
		{
			teachers_name: 'Mona'
		},
		{
			teachers_name: 'Cecile'
		}
	];

	connection.connect();

	try {
		// call the function that returns promise

		console.log(`
        .
        .
        .
        .
        .
        .`);
		await execQuery(CREATE_students_table);
		students.forEach(async (student) => {
			await execQuery('INSERT INTO students SET ?', student);
		});
	} catch (error) {
		console.error(error);
	}

	connection.end();
}

seedDatabase();
app.listen(port);

console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./app/routes/approutes'); //importing route
routes(app); //register the route
