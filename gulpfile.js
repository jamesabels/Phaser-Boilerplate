// Plugin Calls
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');
var imagemin = require('gulp-imagemin');
var stylish = require('jshint-stylish');
var vinylPaths = require('vinyl-paths');
var plumber = require('gulp-plumber');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var gulp = require('gulp');
var del = require('del');

// TASKS
// Complie Styles
gulp.task('styles', function() {
  gulp.src('library/scss/*.scss')
    .pipe(plumber())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer({browsers: ['last 5 versions'], cascade: false}))
    .pipe(gulp.dest('library/css'))
    .pipe(browserSync.stream());
});

// Prefix CSS
gulp.task('prefix-css', function() {
  gulp.src('library/css/*.css')
    .pipe(plumber())
    .pipe(autoprefixer({browsers: ['> 5% in US', 'last 2 versions'], cascade: false}))
    .pipe(gulp.dest('library/css'))
    .pipe(browserSync.stream());
});

// Hint JS
gulp.task('hint', function() {
  return gulp.src('library/js/*.js')
    .pipe(plumber())
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

// Concat JS
gulp.task('concat', function() {
  return gulp.src(['library/**/*.js', '!library/js/**/*.min.js'])
    .pipe(plumber())
    .pipe(uglify())
    .pipe(concat('game.min.js'))
    .pipe(gulp.dest('library/js/min'))
    .pipe(browserSync.stream());
});

// Optimize Images
gulp.task('image-min', function () {
    return gulp.src(['library/assets/images/*.jpg','library/assets/images/*.jpeg', 'library/assets/images/*.png', 'library/assets/images/*.svg', 'library/assets/images/*.gif'])
        .pipe(plumber())
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}]
        }))
        .pipe(gulp.dest('library/assets/images/min'));
});

// Delete Original Images
gulp.task('image-clean', function () {
    return gulp.src(['library/assets/images/*.jpg','library/assets/images/*.jpeg', 'library/assets/images/*.png', 'library/assets/images/*.svg', 'library/assets/images/*.gif'])
      .pipe(plumber())
      .pipe(vinylPaths(del));
});

// BUILD TASKS
// BrowserSync
gulp.task('watch', ['styles', 'prefix-css', 'hint', 'concat', 'image-min', 'image-clean'], function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch('library/scss/*.scss', ['styles', 'prefix-css']);
    gulp.watch('library/css/*.css', ['prefix-css']);
    gulp.watch('*.html').on('change', browserSync.reload);
    gulp.watch().on('change', browserSync.reload);
    gulp.watch('library/js/*.js', ['hint']);
    gulp.watch(['library/**/*.js', '!library/js/**/*.min.js'], ['concat']);
    gulp.watch(['library/assets/images/*.jpg','library/assets/images/*.jpeg', 'library/assets/images/*.png', 'library/assets/images/*.svg', 'library/assets/images/*.gif'] , ['image-min', 'image-clean']);
});
