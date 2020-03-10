# gulp-rtlcss

[![MIT Licence][licence-image]][licence-url] [![NPM Version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][david-dm-image]][david-dm-url] [![Language grade: JavaScript][lgtm-grade-image]][lgtm-url]

[Gulp](http://gulpjs.com) plugin that uses [RTLCSS](https://github.com/MohammadYounes/rtlcss) to convert LTR CSS to RTL.

## Install

```bash
$ npm install --save-dev gulp-rtlcss
```

## Basic Usage

```js
var gulp = require('gulp');
var rtlcss = require('gulp-rtlcss');

gulp.task('default', function () {
	return gulp.src('styles.css')
		.pipe(rtlcss())
		.pipe(gulp.dest('dist'));
});
```
## Configuration

The plugin optionally accepts RTLCSS configuration either as an argument or with a file named `.rtlcssrc` or `.rtlcssrc.json`.

See the [RTLCSS documentation](https://github.com/MohammadYounes/rtlcss) for more information about accepted configuration.

## Example

The below example will result in 2 copies of each stylesheet, one LTR stylesheet and one RTL stylesheet (with "-rtl" appended to the filename before the extension). The example uses autoprefixer, this is just an example of other CSS post-processing being used before rtlcss.

```js
var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var rtlcss = require('gulp-rtlcss');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('styles', function () {
    return gulp.src(['/styles/*.css'])
		.pipe(sourcemaps.init())
        .pipe(autoprefixer(["last 2 versions", "> 1%"])) // Other post-processing.
        .pipe(gulp.dest('dist')) // Output LTR stylesheets.
        .pipe(rtlcss()) // Convert to RTL.
        .pipe(rename({ suffix: '-rtl' })) // Append "-rtl" to the filename.
		.pipe(sourcemaps.write('dist')) // Output source maps.
        .pipe(gulp.dest('dist')); // Output RTL stylesheets.
});
```

## Change Log

### 1.4.1 - 2020-03-10

- Upgrade `lodash` to 4.17.14 to mitigate [CVE-2019-10744](https://github.com/advisories/GHSA-jf85-cpcp-j695).

### 1.4.0 - 2019-06-18

- Upgrade `through2` to 2.0.5.

### 1.3.0 - 2018-09-17

- Upgrade to RTLCSS 2.4.0.
- Upgrade `plugin-error` to 1.0.1.

### 1.2.0 - 2018-03-18

- Upgrade to RTLCSS 2.2.1.

### 1.1.0 - 2018-01-10

- Add support for `gulp-sourcemaps`.
- Remove `gulp-util` in favour of `plugin-error`.

### 1.0.0 - 2016-02-18

- [#6](https://github.com/jjlharrison/gulp-rtlcss/issues/6) Upgrade to RTLCSS 2.

### 0.1.4 - 2015-01-28

- [#2](https://github.com/jjlharrison/gulp-rtlcss/issues/2) Add support for RTLCSS configuration.

[david-dm-image]: http://img.shields.io/david/jjlharrison/gulp-rtlcss.svg?style=flat
[david-dm-url]: https://david-dm.org/jjlharrison/gulp-rtlcss
[npm-image]: http://img.shields.io/npm/v/gulp-rtlcss.svg?style=flat
[npm-url]: https://www.npmjs.org/package/gulp-rtlcss
[travis-image]: http://img.shields.io/travis/jjlharrison/gulp-rtlcss.svg?style=flat
[travis-url]: https://travis-ci.org/jjlharrison/gulp-rtlcss
[licence-image]: http://img.shields.io/npm/l/gulp-rtlcss.svg?style=flat
[licence-url]: https://tldrlegal.com/license/mit-license
[lgtm-grade-image]: https://img.shields.io/lgtm/grade/javascript/g/jjlharrison/gulp-rtlcss.svg?logo=lgtm&logoWidth=18
[lgtm-url]: https://lgtm.com/projects/g/jjlharrison/gulp-rtlcss/context:javascript
