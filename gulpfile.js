var gulp = require("gulp"),
    sass = require("gulp-sass"),
    postcss = require("gulp-postcss"),
    autoprefixer = require("autoprefixer"),
    cssnano = require("cssnano"),
    sourcemaps = require("gulp-sourcemaps"),
    browserSync = require("browser-sync").create(),
    imagemin = require('gulp-imagemin'),
    del = require('del');

var paths = {
    styles: {
        src: "src/scss/*.scss",
        dest: "src/css"
    }    
};

function style() {
    return gulp
        .src(paths.styles.src)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .on("error", sass.logError)
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(sourcemaps.write('/maps'))
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(browserSync.stream());
}

// A simple task to reload the page
function reload() {
    browserSync.reload();
}

// Add browsersync initialization at the start of the watch task
function watch() {
    browserSync.init({
        server: {
            baseDir: "./src"
        }
    });
    gulp.watch(paths.styles.src, style);
    gulp.watch("src/*.html").on('change', browserSync.reload);
    gulp.watch("src/js/*.js").on('change', browserSync.reload);
}

function copy() {
    return gulp.src('./src/**')
        .pipe(gulp.dest('./dist/'));
};

function clean(){
    return del('dist');    
}
function cleanSASS(){
    return del('dist/scss');    
}



exports.watch = watch
exports.style = style;
exports.copy = copy;
exports.clean = clean;
exports.cleanSASS = cleanSASS;

/*
 * Specify if tasks run in series or parallel using `gulp.series` and `gulp.parallel`
 */
var build = gulp.parallel(style, watch);
var prod = gulp.series(clean, copy, cleanSASS);

gulp.task('default', build);
gulp.task('production', prod);