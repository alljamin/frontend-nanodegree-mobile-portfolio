var gulp = require('gulp'),
    minifyCSS = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    useref = require('gulp-useref'),
    gulpIf = require('gulp-if'),
    del = require('del');

gulp.task('clean-docs', function(){
    del.sync('./docs/**/**')
})

gulp.task('useref', function(){
    gulp.src('./src/index.html')
        .pipe(useref())
        .pipe(gulpIf('*.js', uglify()))
        .pipe(gulpIf('*.css',minifyCSS()))
        .pipe(gulp.dest('./docs'))
    gulp.src('./src/projects/*.html')
        .pipe(useref())
        .pipe(gulpIf('*.js', uglify()))
        .pipe(gulpIf('*.css',minifyCSS()))
        .pipe(gulp.dest('./docs/projects'))
    gulp.src('./src/projects/pizza/pizza.html')
        .pipe(useref())
        .pipe(gulpIf('*.js', uglify()))
        .pipe(gulpIf('*.css',minifyCSS()))
        .pipe(gulp.dest('./docs/projects/pizza'))
});

gulp.task('copy-files', function(){
    gulp.src('./src/assets/img/**/*.+(png|ico|jpg|gif|jpeg)')
        .pipe(gulp.dest('./docs/assets/img'))
    gulp.src('./src/projects/pizza/assets/img/**/*.+(png|ico|jpg|gif|jpeg)')
        .pipe(gulp.dest('./docs/projects/pizza/assets/img'))
});

gulp.task('watch', function(){
    gulp.watch(['./src/*.html','./src/projects/*.html','./src/projects/pizza/*.html'], ['useref'])
    gulp.watch(['./src/assets/css/*.css','./src/projects/pizza/assets/css/*.css'], ['useref'])
    gulp.watch(['./src/assets/js/*.js','./src/projects/pizza/assets/js/*.js'], ['useref'])
});

gulp.task('default', ['clean-docs', 'useref', 'copy-files', 'watch']);