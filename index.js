'use strict';

var combine = require('stream-combiner');
var through = require('through2');

module.exports = function () {
	function write() {
		return through.obj(function (file, enc, cb) {
			if (file.isNull()) {
				cb(null, file);
				return;
			}

			if (file.isStream()) {
				cb(null, file);
				return;
			}

			cb(null, file.contents);
		});
	}

	return combine(write(), through());
};
