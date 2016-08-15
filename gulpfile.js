// more info about globs github.com/isaacs/node-glob

// //////////////////////////
// REQUIRED
// //////////////////////////

var gulp    = require ('gulp'),
    uglify  = require('gulp-uglify'),
    browserSync = require('browser-sync'),
    reload  = browserSync.reload,
    compass = require('gulp-compass'),
    plumber = require('gulp-plumber'),
    autoprefixer = require('gulp-autoprefixer'),
    runSequence = require('run-sequence'),
    del     = require('del'), 
    fs      = require('fs'),  
    rename  = require('gulp-rename')

// //////////////////////////
// Scripts Task
// //////////////////////////

gulp.task('scripts', function(){
  gulp.src(['app/js/**/*.js', '!app/js/**/*.min.js'])
    .pipe(plumber())
    .pipe(rename({suffix:'.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('app/js'))
    .pipe(reload({stream:true}));
})

// //////////////////////////
// Compass/ sass Task
// //////////////////////////
gulp.task('compass', function(){
  gulp.src('app/scss/**/main.scss')
    .pipe(plumber())
    .pipe(compass({
      config_file: './config.rb',
      css: 'app/css',
      sass: 'app/scss',
      require: ['susy']
    }))
    .pipe(autoprefixer('last 2 versions'))
    .pipe(gulp.dest('app/css/'))
    .pipe(reload({stream:true}));

});

// //////////////////////////
// Html Task
// //////////////////////////
gulp.task('html', function(){
  gulp.src('app/**/*.html')
  .pipe(reload({stream:true}));

});

// //////////////////////////
// Build Task
// //////////////////////////

//clear out all files and folders from build
gulp.task('build:cleanfolder', function(callback) {
  del([
    'build/**'
  ], callback);
});

//task to create build directory for all files
gulp.task('build:copy', ['build:cleanfolder'], function() {
    return gulp.src('app/**/*/')
    .pipe(gulp.dest('build/'));
});

//task to remove unwanted build files
// list all files and directories here that you do not want to include 
gulp.task('build:remove', ['build:copy'], function(callback) {
  del([
    'build/scss/',
    'build/js/!(*.min.js)'
  ], callback);
});

gulp.task('build', runSequence(['build:copy', 'build:remove']));

// //////////////////////////
// Browser-Sync Task
// //////////////////////////
gulp.task('browser-sync', function(){
  browserSync({
    server:{
      baseDir: './app/'
    }
  })
});

//task to run build server for testing final app
gulp.task('build:serve', function(){
  browserSync({
    server:{
      baseDir: './build/'
    }
  })
}); 

// //////////////////////////
// Watch Task
// //////////////////////////
gulp.task('watch', function(){
  gulp.watch('app/js/**/*.js',['scripts']);
  gulp.watch('app/scss/**/*.scss', ['compass']);
  gulp.watch('app/**/*.html', ['html'])
});

// //////////////////////////
// Default Task
// //////////////////////////
gulp.task('default', ['scripts', 'compass', 'html', 'browser-sync', 'watch'])