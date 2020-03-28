const foods = [
	{
		food_no: 101,
		food_code: 'C1, C2',
		food_description: 'Curry, Cake'
	},
	{
		food_no: 102,
		food_code: 'S1, C2',
		food_description: 'Soup, Cake'
	},
	{
		food_no: 103,
		food_code: 'P1, T1, M1',
		food_description: 'Pie, Tea, Mousse'
	},
	{
		food_no: 104,
		food_code: 'F1, M1',
		food_description: 'Falafal, Mousse'
	},
	{
		food_no: 105,
		food_code: 'P1, T1, M1',
		food_description: 'Pie, Tea, Mousse'
	}
];

const dinnerDtl_values = [
	{
		dinner_id: 'D00001001',
		dinner_date: '2020-03-15',
		venue_code: 'B01',
		venue_description: 'Grand Ball Room',
		food_no: 101
	},
	{
		dinner_id: 'D00001002',
		dinner_date: '2020-03-15',
		venue_code: 'B02',
		venue_description: 'Zoku Roof Top',
		food_no: 102
	},
	{
		dinner_id: 'D00001003',
		dinner_date: '2020-03-20',
		venue_code: 'B03',
		venue_description: 'Goat Farm',
		food_no: 103
	},
	{
		dinner_id: 'D00001004',
		dinner_date: '2020-03-20',
		venue_code: 'B04',
		venue_description: "Mama's Kitchen",
		food_no: 104
	},
	{
		dinner_id: 'D00001005',
		dinner_date: '2020-03-20',
		venue_code: 'B05',
		venue_description: 'GHungry Hungary',
		food_no: 105
	}
];

const orders = [
	{
		member_id: 1,
		member_name: 'Amit',
		house_no: 325,
		street_name: 'Max Park',
		dinner_id: 'D00001001'
	},
	{
		member_id: 2,
		member_name: 'Ben',
		house_no: 24,
		street_name: 'Hudson lane',
		dinner_id: 'D00001002'
	},
	{
		member_id: 3,
		member_name: 'Cristina',
		house_no: 516,
		street_name: '6th Ave',
		dinner_id: 'D00001002'
	},
	{
		member_id: 4,
		member_name: 'Dan',
		house_no: 89,
		street_name: 'John St',
		dinner_id: 'D00001003'
	},
	{
		member_id: 5,
		member_name: 'Ema',
		house_no: 91,
		street_name: 'Pixar St',
		dinner_id: 'D00001003'
	},
	{
		member_id: 6,
		member_name: 'Fatime',
		house_no: 56,
		street_name: '8th Ave',
		dinner_id: 'D00001004'
	},
	{
		member_id: 7,
		member_name: 'Gabor',
		house_no: 54,
		street_name: 'Vivaldi St',
		dinner_id: 'D00001005'
	},
	{
		member_id: 8,
		member_name: 'Hema',
		house_no: 54,
		street_name: '9 Peter St',
		dinner_id: 'D00001003'
	}
];

const dinner_order = [
	{
		member_id: 1,
		dinner_id: 'D00001001'
	},
	{
		member_id: 2,
		dinner_id: 'D00001002'
	},
	{
		member_id: 3,
		dinner_id: 'D00001002'
	},
	{
		member_id: 4,
		dinner_id: 'D00001003'
	},
	{
		member_id: 5,
		dinner_id: 'D00001003'
	},
	{
		member_id: 6,
		dinner_id: 'D00001004'
	},
	{
		member_id: 7,
		dinner_id: 'D00001005'
	},
	{
		member_id: 8,
		dinner_id: 'D00001003'
	}
];

module.exports = {
	foods: foods,
	dinnerDtl_values: dinnerDtl_values,
	orders: orders,
	dinner_order: dinner_order
};
