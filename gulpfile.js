const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');


gulp.task('watch', ['sass'], function() {
  gulp.watch("assets/sass/**/*.scss", ['sass']);
});


gulp.task('sass', function() {
  return gulp.src("assets/sass/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("assets"))
});


 
gulp.task('prefix', () =>
    gulp.src('assets/style.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist'))
);