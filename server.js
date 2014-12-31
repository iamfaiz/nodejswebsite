var http = require('http'),
	port = 3000,
	handleRequest = require('./modules/handleRequest.js'),
	requestModifier = require('./modules/requestModifier.js');

var server = http.createServer(function(req, res){
	var res = requestModifier(res);
	handleRequest(req, res);
});

server.listen(port, function(){
	console.log('Listening on port ' + port);
});
