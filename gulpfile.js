var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');


gulp.task('build', function () {
	return browserify({entries: './app/src/index.js', extensions: [".js", ".jsx"], debug: true})
		.transform('babelify', {presets: [
			'es2015', 'react',
			{
				"plugins": [
					"./babelRelayPlugin"
				]
			}]})
		.bundle()
		.pipe(source('app.js'))
		.pipe(gulp.dest('build'));
});



gulp.task('buildall', ['build']);

gulp.task('watch', ['buildall'], function () {
	gulp.watch('app/**/*.js', ['build']);
});


gulp.task('default', ['buildall']);