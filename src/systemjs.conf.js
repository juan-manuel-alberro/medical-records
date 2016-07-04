/*
 * This config is only used during development and build phase only
 * It will not be available on production
 *
 */

(function(global) {
    // ENV
    global.ENV = global.ENV || 'development';

    // map tells the System loader where to look for things
    var map = {
        'app': 'src/tmp/app',
        'test': 'src/tmp/test',
        'ng2-i18next': 'node_modules/ng2-i18next',
        'i18next': 'node_modules/i18next/i18next.min.js',
        'i18nextXHRBackend': 'node_modules/i18next-xhr-backend/i18nextXHRBackend.min.js',
        'i18nextBrowserLanguageDetector': 'node_modules/i18next-browser-languagedetector/i18nextBrowserLanguageDetector.min.js'
    };

    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app': {
            defaultExtension: 'js'
        },
        'test': {
            defaultExtension: 'js'
        },
        'rxjs': {
            defaultExtension: 'js'
        },
        'ng2-i18next': {
            format: 'cjs',
            defaultExtension: 'js'
        },
        'i18next': {
            format: 'global'
        },
        'i18nextXHRBackend': {
            format: 'global'
        },
        'i18nextBrowserLanguageDetector': {
            format: 'global'
        }
    };

    // List npm packages here
    var npmPackages = [
        '@angular',
        'rxjs',
        'lodash',
        'ng2-i18next'
    ];

    // Add package entries for packages that expose barrels using index.js
    var packageNames = [
        // App barrels
        'app/sitewide',

        // 3rd party barrels
        'lodash',
        'ng2-i18next'
    ];

    // Add package entries for angular packages
    var ngPackageNames = [
        'common',
        'compiler',
        'core',
        'forms',
        'http',
        'platform-browser',
        'platform-browser-dynamic',
        'router'
    ];

    npmPackages.forEach(function (pkgName) {
        map[pkgName] = 'node_modules/' + pkgName;
    });

    packageNames.forEach(function(pkgName) {
        packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
    });

    ngPackageNames.forEach(function(pkgName) {
        var main = global.ENV === 'testing' ? 'index.js' :
            'bundles/' + pkgName + '.umd.js';

        packages['@angular/'+pkgName] = { main: main, defaultExtension: 'js' };
    });

    var config = {
        map: map,
        packages: packages
    };

    // filterSystemConfig - index.html's chance to modify config before we register it.
    if (global.filterSystemConfig) { global.filterSystemConfig(config); }

    System.config(config);

})(this);
