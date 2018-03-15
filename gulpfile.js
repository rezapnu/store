var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('adminlab', function () {
    console.log('Hello world');
});

gulp.task('one', function () {
    console.log('task one');
});

gulp.task('two', ['adminlab' , 'one'] , function () {
    console.log('task two');
});

gulp.task('concat_js', function () {
    gulp
        .src([
            './js/jquery-1.8.3.min.js',
            './assets/bootstrap/js/bootstrap.min.js',
            './js/jquery.blockui.js',
            './assets/uniform/jquery.uniform.min.js',
            './assets/data-tables/jquery.dataTables.js',
            './assets/data-tables/DT_bootstrap.js',
            './js/scripts.js'
        ])
        .pipe(concat("app.js"))
        .pipe(gulp.dest("./dest"));
});

gulp.task('mix_js', function () {
    gulp
        .src([
            './dest/app.js',
        ])
        .pipe(uglify())
        .pipe(gulp.dest("./dest"));
});