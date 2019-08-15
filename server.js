const express = require('express');
const skillsRouter = require('./routes/skills');
const logger = require('morgan');
const app = express();
const path = require('path');
const port = 3100;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/', skillsRouter);
app.use(logger('dev'));

app.listen(port, function() {
	console.log(`Express is listening on port: ${port}`);
});

module.exports = app;
