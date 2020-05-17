// https://george.webb.uno/posts/gulp-and-npm-for-front-end-web-development
// https://medium.com/superhighfives/deploying-to-github-pages-with-gulp-c06efc527de8
var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    deploy = require('gulp-gh-pages'),
    del = require('del');

gulp.task('vendor_js', function() {
    return gulp.src([
			'node_modules/bootstrap/dist/js/bootstrap.min.js',
      'node_modules/jquery/dist/jquery.min.js',
      'node_modules/perfect-scrollbar/dist/js/perfect-scrollbar.jquery.min.js'
    ])
    .pipe(gulp.dest('assets/js'));
});

gulp.task('main_js', function() {
    return gulp.src([
            'js/*.js'
    ])
    .pipe(uglify())
    .pipe(concat('main.js'))
    .pipe(gulp.dest('assets/js'));
});

gulp.task('vendor_fonts', function() {
  return gulp.src([
    'node_modules/font-awesome/fonts/fontawesome-webfont.woff',
    'node_modules/font-awesome/fonts/fontawesome-webfont.woff2',
    'node_modules/font-awesome/fonts/fontawesome-webfont.ttf'
  ])
  .pipe(gulp.dest('assets/fonts'));
});

gulp.task('vendor_css', function() {
  return gulp.src([
    'node_modules/bootstrap/dist/css/bootstrap.min.css',
    'node_modules/bootstrap/dist/css/bootstrap.min.css.map',
    'node_modules/perfect-scrollbar/dist/css/perfect-scrollbar.min.css',
    'node_modules/font-awesome/css/font-awesome.min.css'
  ])
  .pipe(gulp.dest('assets/css'));
});

gulp.task('clean', function() {
  return del([
    'assets/css/**/*',
    '!assets/css/styles.scss',
    'assets/fonts/**/*',
    'assets/js/**/*',
    '!assets/js/main.js'
  ]);
});

gulp.task('default', gulp.series(
  'clean',
  'vendor_js',
  'main_js',
  'vendor_fonts',
  'vendor_css'
));

gulp.task('deploy_code', function () {
  return gulp.src("./**/*", {dot:true})
    .pipe(deploy({
      branch: "master"
    }));
});

gulp.task('deploy_site', function () {
  return gulp.src("./_site/**/*", {dot:true})
    .pipe(deploy({
      branch: "site"
    }));
});

gulp.task('deploy', gulp.series(
  'clean',
  'deploy_code',
  'deploy_site'
));
