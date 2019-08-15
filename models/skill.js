const skills = [
	{
		id: 1,
		skill: 'JavaScript',
		level: 4.5
	},
	{
		id: 1,
		skill: 'Python',
		level: 4
	},
	{
		id: 1,
		skill: 'PostgresSQL',
		level: 5
	}
];

module.exports = {
	find
};

function find() {
	return skills;
}
