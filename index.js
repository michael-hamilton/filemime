var mimeTypes = require(__dirname+'/lib/mimetypes');
var util = require(__dirname+'/lib/util');

exports = module.exports = {};
 
exports.parse = function(filename) {
	fileExtension = util.fileExtension(filename)
	return mimeTypes[fileExtension];
}