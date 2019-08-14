var express = require('express');
var router = express.Router();
var Skills = require('../models/skill');
var skillsCtrl = require('../controllers/skills');

/* GET users listing. */

router.get('/', skillsCtrl.index);
router.get('/:id', skillsCtrl.show);
module.exports = router;
