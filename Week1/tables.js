const mysql = require('mysql');
const db = require('./createDB');
db();
const connection = mysql.createConnection({
	host: 'localhost',
	user: 'hyfuser',
	password: 'hyfpassword',
	database: 'meetup'
});

connection.connect();

const createTables = {
	Invitee: 'CREATE TABLE Invitee (invitee_no int, invitee_name varchar(15), invited_by varchar(15));',
	Room: 'Create table Room (room_no int, room_name varchar(15), floor_number int);',
	Meeting:
		'Create table Meeting (meeting_no int, meeting_title varchar(25), starting_time datetime, ending_time datetime,room_no int);'
};

const invitee = {
	one: `insert into invitee values(1, "Jack", "Unmesh");`,
	two: `insert into invitee values(2, "Jane", "Unmesh");`,
	three: `insert into invitee values(3, "Jason", "Unmesh");`,
	four: `insert into invitee values(4, "Jim", "Unmesh");`,
	five: `insert into invitee values(5, "John", "Unmesh")`
};

const room = {
	one: `insert into room values (201, "water", 2);`,
	two: `insert into room values (202, "fire", 2);`,
	three: `insert into room values (203, "earth", 2);`,
	four: ` insert into room values (204, "air", 2);`,
	five: `insert into room values (205, "soul", 2);`
};

const meeting = {
	one: `insert into meeting values(301, "database", '2020-03-15 09:00','2020-03-15 11:00', 1);`,
	two: `insert into meeting values(301, "html&css",'2020-03-16 09:00','2020-03-16 11:00', 1);`,
	three: `insert into meeting values(301, "JavaScript",'2020-03-17 09:00','2020-03-17 11:00',2);`,
	four: `insert into meeting values(301, "Node.js",'2020-03-18 09:00','2020-03-18 11:00', 2);`,
	five: `insert into meeting values(305, "REACT",'2020-03-18 13:00','2020-03-18 15:00', 5);`
};

function insert(queries) {
	for (let i in queries) {
		console.log('Going to run ', queries[i]);
		connection.query(queries[i], function(error, results, fields) {
			if (error) {
				throw error;
			}
			console.log('the reply is ', results[0]);
		});
	}
}

insert(createTables);
insert(invitee);
insert(room);
insert(meeting);

connection.end();
