var gulp = require('gulp');
var RevAll = require('gulp-rev-all');
var awspublish = require('gulp-awspublish');

var aws = {
  "params": { "Bucket": "" },
  "accessKeyId": "",
  "secretAccessKey": "",
  "region": "eu-west-1"
};

var publisher = awspublish.create(aws);
var headers = {
  'Cache-Control': 'max-age=315360000, no-transform, public'
};

gulp.task('deploy', function () {
  var revAll = new RevAll({
    dontGlobal: [ /.map$/ ],
    dontRenameFile: [ /^\/index.html$/ ]
  });

  gulp.src([
    'index.html',
    'images/**',
    'build/**'
  ])
    .pipe(revAll.revision())
    .pipe(awspublish.gzip())
    .pipe(publisher.publish(headers))
    .pipe(publisher.sync())
    .pipe(awspublish.reporter());
});
