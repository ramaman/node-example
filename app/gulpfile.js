var gulp = require('gulp'),
    nodemon = require('gulp-nodemon');

gulp.task('default', function () {
  nodemon({
    script: 'app.js',
    ext: 'js html',
    env: { 'NODE_ENV': 'development' },
    ignore: './node_modules/**'
  })
  .on('restart', function(){
    console.log("Restarting...");
  });
});
