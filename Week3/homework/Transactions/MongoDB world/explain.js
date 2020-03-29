const queries = [
	`insert into city values(9999999, 'dream city', 'NLD', 'North',10000);`,
	`update city set Population= 20000 where id = 12345678`,
	`select * from city where name = 'dream city';`,
	`select * from city where name = 'dream city' and CountryCode= 'NLD';`,
	`delete   from city where name = 'dream city' and CountryCode= 'NLD';`
];
