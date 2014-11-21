var exec = require('../lib/exec-osascript');

/**
 * iTunes Controller
 */

module.exports.controller = function (app) {

	app.get('/itunes/play', function (req, res, next) {
		exec.osascript('tell application "iTunes" to play', function (error) {
			res.json({ success: error === null });
		});
	});

	app.get('/itunes/pause', function (req, res, next) {
		exec.osascript('tell application "iTunes" to pause', function (error) {
			res.json({ success: error === null });
		});
	});

	app.get('/itunes/playpause', function (req, res, next) {
		exec.osascript('tell application "iTunes" to playpause', function (error) {
			res.json({ success: error === null });
		});
	});

};
