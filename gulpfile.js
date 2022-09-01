const { src , dest , watch , parallel , series } = require('gulp');
const browserSync                      = require('browser-sync').create();
const scss                             = require('gulp-sass')(require('sass'));
const concat                           = require('gulp-concat')
const uglify                           = require('gulp-uglify-es').default;
const autoprefixer                     = require('gulp-autoprefixer');
const image                            = require('gulp-image');
const del                              = require('del')

function styles(){
   return src('app/scss/*.scss')
   .pipe(scss({outputStyle: 'compressed'}))
   .pipe(concat('style.min.css'))
   .pipe(autoprefixer({
      overrideBrowserslist: ['last 10 version'],
      grid: true
   }))
   .pipe(dest('app/css'))
   .pipe(browserSync.stream())
}

function browsersync(){
   browserSync.init({
      server: {
         baseDir: 'app/'
      }
  });
}

function scripts(){
   return src(['node_modules/jquery/dist/jquery.js','app/js/main.js'])
   .pipe(concat('main.min.js'))
   .pipe(uglify())
   .pipe(dest('app/js'))
   .pipe(browserSync.stream())
}

function build(){
   return src([
      'app/css/style.min.css', 
      'app/fonts/**/*' , 
      'app/js/main.min.js', 
      'app/*.html'
   ], {base:'app'})
   .pipe(dest('dist'))
}

function watching(){
   watch(['app/scss/**/*.scss'], styles);
   watch(['app/js/**/*.js', '!app/js/main.min.js'], scripts);
   watch(['app/*.html']).on('change', browserSync.reload);
}

function images (){
   return src('app/images/**/*')
   .pipe(image())
   .pipe(dest('dist/images'))
}

function cleenDist(){
   return del('dist')
}

exports.styles = styles;
exports.watching = watching;
exports.browsersync = browsersync;
exports.scripts = scripts;
exports.cleenDist = cleenDist
exports.images = images;

exports.build = series(cleenDist,images,build);
exports.default = parallel(styles,browsersync,watching,scripts);