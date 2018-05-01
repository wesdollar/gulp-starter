let gulp = require('gulp')
let sass = require('gulp-sass')
let livereload = require('gulp-livereload')

gulp.task('sass', function() {
    gulp.src('src/scss/**/styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'))
        .pipe(livereload())
})

//Watch task
gulp.task('default',function() {
    livereload.listen()
    gulp.watch('src/scss/**/*.scss', ['sass']);
})
