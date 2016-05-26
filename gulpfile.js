/*
|--------------------------------------------------------------------------
| Global requires
|--------------------------------------------------------------------------
|
| Run 'npm install' to install all node modules that are required here.
| The npm modules are pulled in from the node_modules folder
|
*/
    var gulp            = require('gulp');
    var sass            = require('gulp-sass');
    var sourcemaps      = require('gulp-sourcemaps');
    var autoprefixer    = require('gulp-autoprefixer');
    var concat          = require('gulp-concat');
    var uglify          = require('gulp-uglify');
    var imagemin        = require('gulp-imagemin');
    var newer           = require('gulp-newer');
    var pngquant        = require('imagemin-pngquant');
    var browserSync     = require('browser-sync').create();


/*
|--------------------------------------------------------------------------
| Gulp tasks
|--------------------------------------------------------------------------
|
| All gulp tasks are specified here
|
*/
    // Sass Pre-processor with BrowserSync injection
    gulp.task('sass', function () {
        return gulp.src('./assets/sass/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass(/*{outputStyle: 'compressed'}*/).on('error', sass.logError))
        .pipe(autoprefixer({
        	browsers: ['last 10 versions'],
        	cascade: false
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./'))
        .pipe(browserSync.stream());
    });


    // Javascript concatenation and minifier
    gulp.task('scripts', function() {
        return gulp.src([
    		'./assets/js/ease.min.js',
            './assets/js/ink-blots.js',
            './assets/js/image-comparison.js',
            './assets/js/jquery.waypoints.js',
            './assets/js/waypoint.js',
            './assets/js/segment.js',
            './assets/js/segment-responsive-icon.js',
            './assets/js/morphext.js',
            './assets/js/nav-menu.js',
        ])
        .pipe(concat('main.js'))
        // .pipe(uglify())
        .pipe(gulp.dest('./assets/js/'));
    });

     
    // Image compression
    // Add the newer pipe to pass through newer images only
    gulp.task('imagemin', function() {
    	return gulp.src('./assets/img/raw/**/*.{png,jpg,jpeg,gif}')
        .pipe(newer('./assets/img/'))
    	.pipe(imagemin({
    		progressive: true,
    		svgoPlugins: [{removeViewBox: false}],
    		use: [pngquant()]
    	}))
    	.pipe(gulp.dest('./assets/img/'));
    });

    // Browsersync proxy(uses an existing server)
    gulp.task('browser-sync', function() {
        browserSync.init({
            proxy: "localhost/ravenwp",
            // enable shared interactions between devices
            ghostMode: true,
            // public url prefix
            // tunnel: "ravenwebdesign",
            // Don't show any notifications in the browser.
            notify: false,
            /* launch in new tab in browser */
            open: false
        });
    });


/*
|--------------------------------------------------------------------------
| File watcher
|--------------------------------------------------------------------------
|
| The file watcher will watch a folder for file changes whenever a change
| has been made in the specified folder a gulp task or array of tasks 
| will be called.
|
| Be specific with filetypes else cpu/memeory usage may spike
|
*/
    gulp.task('watch', function () {
        gulp.watch('assets/sass/**/*.scss', ['sass']);
        gulp.watch('assets/js/**/*.js', ['scripts']);
        gulp.watch('assets/img/**/*.{png,jpg,jpeg,gif}', ['imagemin']);
    });


/*
|--------------------------------------------------------------------------
| Default gulp taskrunner
|--------------------------------------------------------------------------
|
| Whenever 'gulp' is called from the commandline this is the entrypoint
| default task being called. The second argument takes a task or array
| of tasks that are called when this task runs.
|
*/
    gulp.task('default', [
        'sass', 
        'watch', 
        'scripts', 
        'imagemin', 
        'browser-sync'
    ]);




