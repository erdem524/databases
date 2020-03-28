const util = require('util');
const mysql = require('mysql');
const dinnerInfo = require('./dinnerInfo');
const connection = mysql.createConnection({
	host: 'localhost',
	user: 'hyfuser',
	password: 'hyfpassword'
});

const execQuery = util.promisify(connection.query.bind(connection));

async function seedDatabase() {
	const createData = `CREATE DATABASE IF NOT EXISTS week3`;
	const useData = `use week3`;

	const firstNF = `create table first_NF(member_id int, member_name varchar(50), house_no int, street_name  varchar(50),
    dinner_id varchar(50), dinner_date date,
    venue_code varchar(50), venue_description varchar(50),
    food_code varchar(50), food_description varchar(50));`;

	connection.connect();

	try {
		// call the function that returns promise
		await execQuery(createData);
		await execQuery(useData);
		await execQuery(firstNF);
		dinnerInfo.forEach(async (info) => {
			await execQuery('INSERT INTO first_NF SET ?', info);
		});
	} catch (error) {
		console.error(error);
	}

	connection.end();
}

seedDatabase();
