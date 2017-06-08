var gulp = require('gulp'),
scss = require('gulp-scss');
 prefixer = require('gulp-autoprefixer'),
 reload = browserSync.reload;


var path = {
    build: { 
        html: 'build/',
        js: 'build/js/',
        css: 'build/css/',
        img: 'build/img/',
        fonts: 'build/fonts/'
    },
    src: { 
        html: 'app/*.html', 
        js: 'app/js/main.js',
        style: 'app/style/main.scss',
        img: 'app/img/**/*.*', 
        fonts: 'app/fonts/**/*.*'
    },
    watch: { 
        js: 'app/js/**/*.js',
        style: 'app/style/**/*.scss',
        img: 'app/img/**/*.*',
        fonts: 'app/fonts/**/*.*'
    },
    clean: './build'
};

var config = {
    server: {
        baseDir: "./build"
    },
    tunnel: true,
    host: 'localhost',
    port: 9000,
    logPrefix: "Frontend"
};

gulp.task('html:build', function () {
    gulp.app(path.app.html) 
        .pipe(gulp.dest(path.build.html)) 
        .pipe(reload({stream: true})); 

});        

gulp.task('js:build', function () {
    gulp.app(path.app.js) 
        .pipe(rigger()) 
        .pipe(sourcemaps.init()) 
        .pipe(uglify()) 
        .pipe(sourcemaps.write()) 
        .pipe(gulp.dest(path.build.js)) 
        .pipe(reload({stream: true})); 
});
gulp.task('style:build', function () {
    gulp.app(path.app.style) 
        .pipe(sourcemaps.init()) 
        .pipe(prefixer()) 
        .pipe(cssmin()) 
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.css)) 
        .pipe(reload({stream: true}));
});

gulp.task('build', [
    'html:build',
    'js:build',
    'style:build'
    
]);

gulp.task('watch', function(){
    watch([path.watch.html], function(event, cb) {
        gulp.start('html:build');
    });
    watch([path.watch.style], function(event, cb) {
        gulp.start('style:build');
    });
    watch([path.watch.js], function(event, cb) {
        gulp.start('js:build');
    });
    
});

gulp.task('default', ['build', 'webserver', 'watch']);