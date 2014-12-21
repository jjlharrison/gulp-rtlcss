# gulp-rtlcss

[![MIT Licence][licence-image]][licence-url] [![NPM Version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][david-dm-image]][david-dm-url]

[Gulp](http://gulpjs.com) plugin that uses [RTLCSS](https://github.com/MohammadYounes/rtlcss) to convert LTR CSS to RTL.

## Install

```bash
$ npm install --save-dev gulp-rtlcss
```

## Usage

```js
var gulp = require('gulp');
var rtlcss = require('gulp-rtlcss');

gulp.task('default', function () {
	return gulp.src('styles.css')
		.pipe(rtlcss())
		.pipe(gulp.dest('dist'));
});
```

[david-dm-image]: http://img.shields.io/david/jjlharrison/gulp-rtlcss.svg?style=flat
[david-dm-url]: https://david-dm.org/jjlharrison/gulp-rtlcss
[npm-image]: http://img.shields.io/npm/v/gulp-rtlcss.svg?style=flat
[npm-url]: https://www.npmjs.org/package/gulp-rtlcss
[travis-image]: http://img.shields.io/travis/jjlharrison/gulp-rtlcss.svg?style=flat
[travis-url]: https://travis-ci.org/jjlharrison/gulp-rtlcss
[licence-image]: http://img.shields.io/npm/l/gulp-rtlcss.svg?style=flat
[licence-url]: https://tldrlegal.com/license/mit-license
