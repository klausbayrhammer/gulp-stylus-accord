const stylus = require('gulp-stylus');
const gulp = require('gulp');

gulp.task('stylus', function () {
    return gulp.src('stylus_files_1/index.styl')
        .pipe(stylus({
                paths: ['stylus_files_2']
            }
        ))
        .pipe(gulp.dest('target'));
});