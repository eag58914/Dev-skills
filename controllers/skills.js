const Skill = require('../models/skill');

module.exports = {
	getAll,
	new: newSkill,
	create
};

function newSkill(req, res) {
	res.render('/Users/elcogarcia/express-dev-skills/views/new.ejs');
}

function getAll(req, res) {
	res.render('index', {
		skills: Skill.find()
	});
}

function create(req, res) {
	console.log('req.body of POST /skills', req.body);
	// req.body.done = false;
	Skill.create(req.body);
	res.redirect('/');
}
