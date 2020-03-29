/*
  3. Write a query() for each of the following SQL (unfinished) commands.
   Decide the table name and its contents yourself:
    a) CREATE TABLE
    b) INSERT VALUE
    c) SELECT *
  Use JavaScript comments to explain, line by line, what’s happening.
*/

const util = require('util');
const mysql = require('mysql');
/*
"util" module provides some functions to print formatted strings as well as some 'utility' functions 
that are helpful for debugging purposes. 

for Node.js can be used in database applications we need to download databases is MySQL.
*/

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'hyfuser',
	password: 'hyfpassword',
	database: 'userdb'
});
/*
it connects our file with related usernaem, and password, then use the database
*/
const execQuery = util.promisify(connection.query.bind(connection));

async function seedDatabase() {
	const CREATE_students_table = `
    CREATE TABLE IF NOT EXISTS students (
      student_name VARCHAR(50),
      DOB  DATE,
      student_no int,
      primary key(student_no)
    );`;
	// used int for numbers, varchar for string, date for dates,
	// I made student_no as primary key, coz it is unique.
	const students = [
		{
			student_name: 'Enwer',
			DOB: '1987-5-24',
			student_no: 19870524
		},
		{
			student_name: 'Ahmed',
			DOB: '1990-3-24',
			student_no: 19990324
		},
		{
			student_name: 'Naji',
			DOB: '1977-8-11',
			student_no: 19770811
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
