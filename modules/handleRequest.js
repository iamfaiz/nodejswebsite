var fs = require('fs'),
	handleMimeType = require('./handleMimeType.js'),
	handleRoute = require('./handleRoute.js');

module.exports = function(req, res){
	if ( fs.existsSync('public' + req.url) ) // check if the public/{whatever url} file exists
	{
		if (fs.lstatSync('public' + req.url).isDirectory())
		{
			if (fs.existsSync('public' + req.url + '/index.html'))
			{
				res.setHeader('Content-Type', 'text/html');
				res.end(fs.readFileSync('public' + req.url + '/index.html'));
			} else {
				handleRoute(req, res);
			}
		} else {
			var fileContent = fs.readFileSync('public' + req.url);
			res.setHeader('Content-Type', handleMimeType('public' + req.url));
			res.end(fileContent);
		}
	} else {
		handleRoute(req, res);
	}
}