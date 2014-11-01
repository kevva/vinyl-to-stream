# vinyl-to-stream [![Build Status](http://img.shields.io/travis/kevva/vinyl-to-stream.svg?style=flat)](https://travis-ci.org/kevva/vinyl-to-stream)

> Convert a vinyl stream to a text stream

## Install

```sh
$ npm install --save vinyl-to-stream
```

## Usage

```js
var fs = require('fs');
var vfs = require('vinyl-fs');
var vinylToStream = require('vinyl-to-stream');

vfs.src('foo.html')
	.pipe(vinylToStream())
	.pipe(fs.createWriteStream('bar.html'));
```

## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
