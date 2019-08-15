var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills');

/* GET users listing. */

router.get('/', skillsCtrl.getAll);
router.post('/skills', skillsCtrl.create);
router.get('/new', skillsCtrl.new);

module.exports = router;
