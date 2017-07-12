var gulp = require('gulp'),
    minifyCSS = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    useref = require('gulp-useref'),
    gulpIf = require('gulp-if'),
    del = require('del');
    critical = require('critical');
    imagemin = require('gulp-imagemin');
    autoprefixer = require('gulp-autoprefixer');


gulp.task('clean', function(){
    del.sync('./docs/**/**')
})

//all optimised files go to docs
gulp.task('useref', function(){
    gulp.src('./src/index.html')
        .pipe(useref())
        .pipe(gulpIf('*.js', uglify()))
        .pipe(gulpIf('*.css', autoprefixer({browsers: ['last 40 versions']}))) // so that we can support IE9
        .pipe(gulpIf('*.css', minifyCSS()))
        .pipe(gulp.dest('./docs'))
    gulp.src('./src/projects/*.html')
        .pipe(useref())
        .pipe(gulpIf('*.js', uglify()))
        .pipe(gulpIf('*.css', autoprefixer({browsers: ['last 40 versions']})))
        .pipe(gulpIf('*.css', minifyCSS()))
        .pipe(gulp.dest('./docs/projects'))
    gulp.src('./src/projects/pizza/pizza.html')
        .pipe(useref())
        .pipe(gulpIf('*.js', uglify()))
        .pipe(gulpIf('*.css', autoprefixer({browsers: ['last 40 versions']})))
        .pipe(gulpIf('*.css', minifyCSS()))
        .pipe(gulp.dest('./docs/projects/pizza'))
});

// critical will overwrite .html files in docs
gulp.task('critical', function () {
    critical.generate({
        inline: true,
        base: 'docs/',
        src: 'index.html', 
        dest: 'index.html', //instead of creating new file it will override the existing one
        width: 320,
        height: 480,
        minify: true
    });
    critical.generate({
        inline: true,
        base: 'docs/projects/pizza',
        src: 'pizza.html',
        dest: 'pizza.html',
        width: 320,
        height: 480,
        minify: true
    });
    // no easy way to generate critical css for multiple different html files at once
});

gulp.task('images', function () {
    gulp.src('src/assets/img/*')
		.pipe(imagemin())
		.pipe(gulp.dest('docs/assets/img'))
    gulp.src('src/projects/pizza/assets/img/*')
		.pipe(imagemin())
		.pipe(gulp.dest('docs/projects/pizza/assets/img'))
});

gulp.task('watch', function(){
    gulp.watch(['./src/*.html','./src/projects/*.html','./src/projects/pizza/*.html'], ['useref'])
    gulp.watch(['./src/assets/css/*.css','./src/projects/pizza/assets/css/*.css'], ['useref'])
    gulp.watch(['./src/assets/js/*.js','./src/projects/pizza/assets/js/*.js'], ['useref'])
    gulp.watch(['./src/assets/img/*','./src/projects/pizza/assets/img/*'], ['images'])
});

gulp.task('default', ['clean', 'critical', 'images', 'watch']);