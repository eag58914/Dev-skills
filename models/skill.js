const skills = [ 'html', 'CSS', 'JavaScript', 'Express' ];

module.exports = {
	getAll,
	getOne
};
function getAll() {
	return skills;
}
function getOne(id) {
	return skills[id];
}
