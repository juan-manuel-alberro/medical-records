var gulp = require('gulp');
var requireDir = require('require-dir');
var tasks = requireDir('./config/gulp/tasks');
var config = require('./config/gulp/config')();
var envConfig = require('./config/gulp/env');

console.log('============ Angular 2 Starter Kit ============');
console.log('Current environment: ' + envConfig.ENV);
console.log('- Change it using --env or NODE_ENV');
console.log('===============================================');

/* Default task */
gulp.task('default', ['serve-dev']);
