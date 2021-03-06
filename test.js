'use strict';
var path = require('path');
var read = require('vinyl-file').read;
var test = require('ava');
var vinylToStream = require('./');

test('return a buffer instead of an object', function (t) {
	t.plan(2);

	read(path.join(__dirname, 'index.js'), function (err, file) {
		t.assert(!err, err);

		var buf = file.contents.toString();
		var stream = vinylToStream();

		stream.on('data', function (data) {
			t.assert(data.toString() === buf, data.toString());
		});

		stream.end(file);
	});
});
