'use strict';
var PassThrough = require('readable-stream/passthrough');
var streamCombiner = require('stream-combiner2');
var Transform = require('readable-stream/transform');

module.exports = function () {
	function write() {
		return new Transform({
			objectMode: true,
			transform: function (file, enc, cb) {
				if (file.isNull()) {
					cb(null, file);
					return;
				}

				if (file.isStream()) {
					cb(null, file);
					return;
				}

				cb(null, file.contents);
			}
		});
	}

	return streamCombiner(write(), new PassThrough({objectMode: true}));
};
