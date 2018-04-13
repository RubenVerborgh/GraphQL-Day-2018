var gulp = require('gulp'),
    sync = require('browser-sync').create();

gulp.task('default', function () {
  sync.init({
    notify: false,
    server: { baseDir: './', },
    ghostMode: false,
  });
  gulp.watch(['*', '*/*', '*/*/*', '!node_modules/']).on('change', sync.reload);
});
