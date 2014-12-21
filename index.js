(function(){
    "use strict";
    var gutil = require('gulp-util'),
        through = require('through2'),
        rtlcss = require('rtlcss');

    module.exports = function (options) {
        return through.obj(function (file, enc, cb) {
            if (file.isNull()) {
                this.push(file);
                return cb();
            }

            if (file.isStream()) {
                this.emit('error', new gutil.PluginError('gulp-rtlcss', 'Streaming not supported'));
                return cb();
            }

            file.contents = new Buffer(rtlcss.process(file.contents.toString()));
            this.push(file);
            cb();
        });
    };
})();
