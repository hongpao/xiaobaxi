/**
 * Created by hongpao on 2018/3/7.
 */

const gulp = require('gulp'),
    less = require('gulp-less'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require('gulp-rename');


//需要编译的less集合
const lessAry = ['index'];

gulp.task('lessToWxss', function () {

    lessAry.map(function (item) {
        return (
            gulp.src('./dist/less/' + item + '.less')
                .pipe(less())
                .pipe(autoprefixer({
                    browsers: ['last 2 versions', 'Android >= 4.0'],
                    cascade: true, //是否美化属性值 默认：true 像这样：
                    remove: true //是否去掉不必要的前缀 默认：true
                }))
                .pipe(rename((path) => path.extname = '.wxss'))
                .pipe(gulp.dest('./dist/pages/' + item))
        );
    });
});


gulp.task('gwx', function () {
    gulp.watch('./dist/less/*.less', ['lessToWxss']); //当所有less文件发生改变时，调用gLess任务
});

gulp.task('xiaochengxu', ['lessToWxss', 'gwx']);

gulp.task('default', ['lessToWxss']);