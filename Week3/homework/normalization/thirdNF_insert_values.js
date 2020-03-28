const members = [
	{
		member_id: 1,
		member_name: 'Amit',
		house_no: 325,
		street_name: 'Max Park'
	},
	{
		member_id: 2,
		member_name: 'Ben',
		house_no: 24,
		street_name: 'Hudson lane'
	},
	{
		member_id: 3,
		member_name: 'Cristina',
		house_no: 516,
		street_name: '6th Ave'
	},
	{
		member_id: 4,
		member_name: 'Dan',
		house_no: 89,
		street_name: 'John St'
	},
	{
		member_id: 5,
		member_name: 'Ema',
		house_no: 91,
		street_name: 'Pixar St'
	},
	{
		member_id: 6,
		member_name: 'Fatime',
		house_no: 56,
		street_name: '8th Ave'
	},
	{
		member_id: 7,
		member_name: 'Gabor',
		house_no: 54,
		street_name: 'Vivaldi St'
	},
	{
		member_id: 8,
		member_name: 'Hema',
		house_no: 54,
		street_name: '9 Peter St'
	}
];

const dinners = [
	{
		dinner_id: 'D00001001',
		venue_code: 'B01',
		food_no: 101
	},
	{
		dinner_id: 'D00001002',
		venue_code: 'B02',
		food_no: 102
	},
	{
		dinner_id: 'D00001003',
		venue_code: 'B03',
		food_no: 103
	},
	{
		dinner_id: 'D00001004',
		venue_code: 'B04',
		food_no: 104
	},
	{
		dinner_id: 'D00001005',
		venue_code: 'B05',
		food_no: 105
	}
];

const venue = [
	{
		venue_code: 'B01',
		venue_description: 'Grand Ball Room'
	},
	{
		venue_code: 'B02',
		venue_description: 'Zoku Roof Top'
	},
	{
		venue_code: 'B03',
		venue_description: 'Goat Farm'
	},
	{
		venue_code: 'B04',
		venue_description: "Mama's Kitchen"
	},
	{
		venue_code: 'B05',
		venue_description: 'GHungry Hungary'
	}
];

module.exports = {
	members: members,
	dinners: dinners,
	venue: venue
};
