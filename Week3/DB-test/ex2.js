/*
  2. The table "Online Users" contains the following columns:
    - user_nickname
    - last_login_date
    - number_of_friends
    - date_created
    - credit_card_number
  a) What data type do you think each column is? Explain your choice.
  b) What’s the SQL query for adding a new column called total_play_time?
*/

const util = require('util');
const mysql = require('mysql');

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'hyfuser',
	password: 'hyfpassword',
	database: 'userdb'
});

const execQuery = util.promisify(connection.query.bind(connection));

async function seedDatabase() {
	const CREATE_Online_Users_table = `
    CREATE TABLE IF NOT EXISTS Online_Users (
      user_nickname VARCHAR(50),
      last_login_date DATE,
      number_of_friends int,
      date_created date,
      credit_card_number VARCHAR(50), 
      primary key(credit_card_number)
    );`;
	// use int for numbers, varchar for string, date for dates,
	// I made credid card number as primary key, coz it is unique.
	const Online_Users = [
		{
			user_nickname: 'Benno',
			last_login_date: '2020-03-26',
			number_of_friends: 5,
			date_created: '2017-3-26',
			credit_card_number: 'INGB19870524'
		},
		{
			user_nickname: 'Mike',
			last_login_date: '2020-03-28',
			number_of_friends: 9,
			date_created: '2012-12-16',
			credit_card_number: 'INGB19990324'
		},
		{
			user_nickname: 'Bird',
			last_login_date: '2020-03-11',
			number_of_friends: 4,
			date_created: '2019-4-14',
			credit_card_number: 'INGB19770811'
		}
	];

	connection.connect();

	try {
		// call the function that returns promise
		await execQuery(CREATE_Online_Users_table);
		Online_Users.forEach(async (user) => {
			await execQuery('INSERT INTO Online_Users SET ?', user);
		});
	} catch (error) {
		console.error(error);
	}

	connection.end();
}

seedDatabase();
