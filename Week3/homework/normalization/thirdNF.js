const util = require('util');
const mysql = require('mysql');
const thirdNFvalues = require('./thirdNF_insert_values');
const members = thirdNFvalues.members;
const dinners = thirdNFvalues.dinners;
const venue = thirdNFvalues.venue;

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'hyfuser',
	password: 'hyfpassword',
	database: 'week3'
});

const execQuery = util.promisify(connection.query.bind(connection));

async function seedDatabase() {
	const venue_table = `create table venue( 
		venue_code varchar(50) primary key, venue_description varchar(50));`;

	const members_table = `create table members(member_id int, member_name varchar(50),
     house_no int, street_name  varchar(50), 
     CONSTRAINT FK_mem_id FOREIGN KEY(member_id) REFERENCES orders(member_id));`;

	const dinners_table = `create table dinners(dinner_id varchar(50),venue_code varchar(50), food_no int, 
	FOREIGN KEY (dinner_id) REFERENCES dinner_dtl(dinner_id),
    FOREIGN KEY (food_no) REFERENCES food(food_no),
	FOREIGN KEY (venue_code) REFERENCES venue(venue_code)
	)`;

	try {
		console.log(`everythin is ok`);
		await execQuery(venue_table);
		await execQuery(members_table);
		await execQuery(dinners_table);

		venue.forEach(async (ven) => {
			await execQuery('INSERT INTO venue SET ?', ven);
		});
		members.forEach(async (member) => {
			await execQuery('INSERT INTO members SET ?', member);
		});

		dinners.forEach(async (dinner) => {
			await execQuery('INSERT INTO dinners SET ?', dinner);
		});
	} catch (error) {
		console.error(error);
	}

	connection.end();
}

seedDatabase();
