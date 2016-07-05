var gulp = require('gulp');
var config = require('../config')();
var Server = require('karma').Server;
var gulpProtractor = require('gulp-protractor');
var remapIstanbul = require('remap-istanbul/lib/gulpRemapIstanbul');
var runSequence = require('run-sequence');
var coveralls = require('gulp-coveralls');
var replace = require('gulp-replace-path');
var path = require('path');
var argv = require('yargs')
            .alias('w', 'watch')
            .argv;

gulp.task('test', ['clean-report', 'unit-test']);

gulp.task('unit-test', ['tsc'], function (done) {
    var watch = argv.watch || false;

    if (watch) {
        runSequence('watch-ts');
        console.log('=== Unit Test Watch Mode ===');
        console.log('- It will autowatch the changed files and re-run the test');
        console.log('- Press Cmd/Ctrl + C to exit and get the coverage result');
        console.log('- Press Cmd/Ctrl + C again to close the TSC watch.');
    }

    new Server({
        configFile: __dirname + '/../../test/karma.conf.js',
        singleRun: !watch
    }, karmaDone).start();

    function karmaDone (exitCode) {
    	remapCoverage(done, exitCode);
    }
});

gulp.task('coveralls', function() {
  gulp.src(config.report.path + 'remap/lcov.info')
  .pipe(coveralls());
});

gulp.task('fixPaths', function(){
  gulp.src([config.report.path + 'remap/lcov.info'])
    .pipe(replace(/\/source/g, 'src'))
    .pipe(gulp.dest(function(data){ return data.base; }))
});

gulp.task('e2e', ['e2e-test']);
gulp.task('driver-update', gulpProtractor['webdriver_update']);
gulp.task('e2e-test', ['driver-update', 'tsc-e2e'], function () {
    gulp.src(config.tmpE2E + '**/*.spec.js')
    .pipe(gulpProtractor.protractor({
        configFile: 'config/test/protractor.conf.js',
        args: ['--baseUrl', config.e2eConfig.seleniumTarget]
    }))
    .on('error', function(e) {
        console.log('Error running E2E testing');
        process.exit(1);
    });
});

function remapCoverage (done, exitCode) {
    console.log('Remapping coverage to TypeScript format...');
    gulp.src(config.report.path + 'report-json/coverage-final.json')
        .pipe(remapIstanbul({
            basePath: config.src,
            reports: {
                'lcovonly': config.report.path + 'remap/lcov.info',
                'json': config.report.path + 'remap/coverage.json',
                'html': config.report.path + 'remap/html-report',
                'text-summary': config.report.path + 'remap/text-summary.txt'
            }
        }))
        .on('finish', function () {
            console.log('Test Done with exit code: ' + exitCode);
            done(exitCode);
            console.log('Remapping done! View the result in report/remap/html-report');
        });
}
