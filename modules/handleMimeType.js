module.exports = function(url){
	var fileExtension = url.split('.').pop();
	var mimeType;
	switch(fileExtension)
	{
		case 'css':
			mimeType = 'text/css';
			break;
		case 'html':
			mimeType = 'text/html';
			break;
		case 'js':
			mimeType = 'text/javascript';
			break;
		case 'json':
			mimeType = 'application/json';
			break;
		default:
			mimeType = 'text/plain'
	}

	return mimeType;
}