var exec = require('child_process').exec;

exports.osascript = function (command, callback) {
	return exec("osascript -e '" + command + "'", callback);
};
