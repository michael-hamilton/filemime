exports = module.exports = {};

exports.fileExtension = function(filename) {
	return filename.split('.').pop();
}