const util = require('util');
const mysql = require('mysql');
const secondNFvalues = require('./secondNF_insert_values');
const foods = secondNFvalues.foods;
const dinnerDtl_values = secondNFvalues.dinnerDtl_values;
const orders = secondNFvalues.orders;
const dinner_order = secondNFvalues.dinner_order;

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'hyfuser',
	password: 'hyfpassword',
	database: 'week3'
});

const execQuery = util.promisify(connection.query.bind(connection));

async function seedDatabase() {
	const food_table = `create table food(food_no Int, food_code varchar(50), food_description varchar(50), PRIMARY KEY (food_no));`;

	const dinnerDtl = `create table dinner_dtl(dinner_id varchar(50), dinner_date date,
 venue_code varchar(50), venue_description varchar(50),
food_no int, FOREIGN KEY (food_no) REFERENCES food(food_no), primary key(dinner_id));`;

	const orders_table = `create table orders(member_id int primary key, member_name varchar(50),
     house_no int, street_name  varchar(50), dinner_id varchar(50), 
     CONSTRAINT FK_dinner_id FOREIGN KEY (dinner_id) REFERENCES dinner_dtl(dinner_id));`;

	const dinnerOrder_table = `create table dinner_order(member_id int, dinner_id varchar(50), 
    CONSTRAINT FK_member_id FOREIGN KEY(member_id) REFERENCES orders(member_id),
    FOREIGN KEY (dinner_id) REFERENCES dinner_dtl(dinner_id));`;

	try {
		console.log(`everythin is ok`);
		// call the function that returns promise
		await execQuery(food_table);
		await execQuery(dinnerDtl);
		await execQuery(orders_table);
		await execQuery(dinnerOrder_table);

		foods.forEach(async (food) => {
			await execQuery('INSERT INTO food SET ?', food);
		});

		dinnerDtl_values.forEach(async (value) => {
			await execQuery('INSERT INTO dinner_Dtl SET ?', value);
		});
		orders.forEach(async (order) => {
			await execQuery('INSERT INTO orders SET ?', order);
		});
		dinner_order.forEach(async (din_o) => {
			await execQuery('INSERT INTO dinner_order SET ?', din_o);
		});
	} catch (error) {
		console.error(error);
	}

	connection.end();
}

seedDatabase();
