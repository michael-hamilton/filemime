var expect = require('chai').expect;
var mimeTypes = require('../index.js');

describe("mimeTypes", function() {
	describe("#parse()", function() {
		it("should parse filename", function() {
			var filename = "test.js";
			var result = mimeTypes.parse(filename);

			expect(result).to.equal('application/x-javascript');
		});
	});
});