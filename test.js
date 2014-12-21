(function() {
    'use strict';
    var assert = require('assert');
    var gutil = require('gulp-util');
    var gulpRtlcss = require('./index');

    it('should compile convert LTR CSS to RTL', function (cb) {
        var stream = gulpRtlcss();

        stream.on('data', function (file) {
            assert.equal(file.contents.toString(), '.selector { float: right; /* comment */ }');
            cb();
        });

        stream.write(new gutil.File({
            path: 'styles.css',
            contents: new Buffer('.selector { float: left; /* comment */ }')
        }));
    });
})();
