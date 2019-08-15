const Skill = require('../models/skill');

module.exports = {
	getAll
};

function getAll(req, res) {
	res.render('index', {
		skills: Skill.find()
	});
}
