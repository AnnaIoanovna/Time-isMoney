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