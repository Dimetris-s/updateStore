let gulp = require('gulp');
let less = require('gulp-less');
let browserSync = require('browser-sync');
var browserify  = require('browserify');
var sourse      = require('vinyl-source-stream');
let vueify      = require('vueify');

gulp.task('server', function () {
    browserSync({
        server: {
            baseDir: 'dist'
        }
    });
});

gulp.task('fonts',function(){
    gulp.src('./src/fonts/*.*')
        .pipe(gulp.dest('./dist/fonts'))
})

gulp.task('html',function(){
    gulp.src('./src/*.html')
        .pipe(gulp.dest('./dist'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('less',function(){
    gulp.src('./src/less/index.less')
        .pipe(less())
        .pipe(gulp.dest('./dist/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
})

gulp.task('js', function () {
    browserify('./src/js/index.js')
        .transform(vueify)
        .bundle()
        .pipe(sourse('index.js'))
        .pipe(gulp.dest('./dist/js'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('img',function(){
    gulp.src('./src/img/*.*')
        .pipe(gulp.dest('./dist/img'))
});

gulp.task('watch', function () {
    gulp.watch('./src/*.html', ['html']);
    gulp.watch('./src/less/**/*.less', ['less']);
    gulp.watch('./src/js/**/*.js', ['js']);
    gulp.watch('./src/vue/**/*.vue', ['js']);
    gulp.watch('./src/img/**/*.*',['img']);
});

gulp.task('build', ['html', 'less', 'js']);

gulp.task('default', ['build','watch','server','img','fonts']);