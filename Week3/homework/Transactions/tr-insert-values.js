const account = [
	{
		acnt_no: 101,
		balance: 1000
	},
	{
		acnt_no: 102,
		balance: 2000
	},
	{
		acnt_no: 103,
		balance: 3000
	}
];

const account_changes = [
	{
		chng_no: 201,
		acnt_no: 101,
		amount: 1100,
		changed_date: '2020-01-21',
		remark: 'Food'
	},
	{
		chng_no: 202,
		acnt_no: 102,
		amount: 2100,
		changed_date: '2020-02-22',
		remark: 'Medicine'
	},
	{
		chng_no: 203,
		acnt_no: 103,
		amount: 3100,
		changed_date: '2020-03-23',
		remark: 'Car'
	}
];

module.exports = {
	account: account,
	account_changes: account_changes
};
