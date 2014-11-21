var exec = require('../lib/exec-osascript');

/**
 * Spotify Controller
 */

module.exports.controller = function (app) {

	app.get('/spotify/play', function (req, res, next) {
		exec.osascript('tell application "Spotify" to play', function (error) {
			res.json({ success: error === null });
		});
	});

	app.get('/spotify/pause', function (req, res, next) {
		exec.osascript('tell application "Spotify" to pause', function (error) {
			res.json({ success: error === null });
		});
	});

	app.get('/spotify/playpause', function (req, res, next) {
		exec.osascript('tell application "Spotify" to playpause', function (error) {
			res.json({ success: error === null });
		});
	});

};
