var express = require('express');
var morgan = require('morgan');
var fs = require('fs');

var app = module.exports = express();

app.set('port', process.env.PORT || 4867);

app.use(morgan('short'));

// Dynamically include routes (via controllers)
fs.readdirSync('./controllers').forEach(function (file) {
	if (file.substr(-3) === '.js') {
		require('./controllers/' + file).controller(app);
	}
});

app.listen(app.get('port'), function() {
	console.log('app running on port:', app.get('port'));
});
