gulp = require('gulp')
coffee = require('gulp-coffee')
compass = require('gulp-compass')
concat = require('gulp-concat')
uglify = require('gulp-uglify')
header = require('gulp-header')
rename = require('gulp-rename')
grunt = require('gulp-grunt')(gulp)
_ = require('underscore')
{exec} = require('child_process')

pkg = require('./package.json')
banner = "/*! #{ pkg.name } #{ pkg.version } */\n"

gulp.task 'bower', ->
  gulp.run('grunt-bower')

gulp.task 'coffee', ->
  gulp.src('coffee/*')
    .pipe(coffee())
    .pipe(gulp.dest('./js/'))

gulp.task 'concat', ->
  gulp.src(['./deps/tether/tether.js', './deps/drop/drop.js', './js/tooltip.js'])
    .pipe(concat('tooltip.js'))
    .pipe(header(banner))
    .pipe(gulp.dest('./'))

gulp.task 'uglify', ->
  gulp.src('./tooltip.js')
    .pipe(uglify())
    .pipe(header(banner))
    .pipe(rename('tooltip.min.js'))
    .pipe(gulp.dest('./'))

gulp.task 'js', ->
  gulp.run 'coffee', 'concat', 'uglify'

gulp.task 'compass', ->
  for path in ['', 'docs/welcome/']
    gulp.src("./#{ path }sass/*")
      .pipe(compass(
        sass: "#{ path }sass"
        css: "#{ path }css"
        comments: false
      ))
      .pipe(gulp.dest("./#{ path }css"))

gulp.task 'default', ->
  gulp.run 'bower', _.once ->
    gulp.run 'compass', 'js'

  gulp.watch './coffee/*', ->
    gulp.run 'js'

  gulp.watch './**/*.sass', ->
    gulp.run 'compass'
