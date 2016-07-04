# Angular 2 Starter Kit

## Status
[![Build Status](https://travis-ci.org/juan-manuel-alberro/angular2-starter-kit.svg?branch=master)](https://travis-ci.org/juan-manuel-alberro/angular2-starter-kit)

## Introduction
Welcome to Angular 2 Starter Kit!

Angular 2 is still in **Release Candidate** stage, please **don't** use this in production. This repo is only for learning only and is a mix of projects that you can find in Github.

Follow Angular 2 Changelog [here](https://github.com/angular/angular/blob/master/CHANGELOG.md)


This starter contains

* [Angular 2](https://angular.io/):
* [NPM](https://www.npmjs.com/) for package manager (a server project will be added soon and also this manager will be used)
* [TypeScript](http://www.typescriptlang.org/)
  * with [Typings](https://github.com/typings/typings) for TypeScript definition manager
* [Gulp](http://gulpjs.com/) (Tasks: *serve*, *watch*, *compile*, *test* to *build*)
* [Browsersync](https://www.browsersync.io/)
* [SystemJS](https://github.com/systemjs/systemjs)
* [ng2-i18next](https://www.npmjs.com/package/ng2-i18next)
* [Codelyzer](https://github.com/mgechev/codelyzer)
* [Karma](http://karma-runner.github.io/)
* [Jasmine](http://jasmine.github.io/)
* [Istanbul](https://github.com/gotwarlost/istanbul)
  * with [Remap Istanbul](https://github.com/SitePen/remap-istanbul)
* [SystemJS Builder](https://github.com/systemjs/builder) or [Webpack](https://webpack.github.io/) for module bundling in production

## Start
Let's start up the server, run:
`gulp` or `gulp serve-dev`

All the `.js` files are ignored and should't be uploaded to the repository.

## I18n
There's a directive to translate the strings in the html files, just do something like this

```html
<p i18n="my.key">fallback string</p>
```

## Testing
This starter comes with testing gulp workflow

### Unit testing
Just run
```bash
gulp test
```

### E2E testing
Firstly start the server:
```
gulp serve-dev
```
To begin testing, run:
```bash
gulp e2e
```

## Production
> All build tasks will run the `gulp test`, the bundle will only be created if the test passed.

You can create production build by running:
```bash
gulp build
```
or you can create production build and then serve it using Browsersync by running:
```bash
gulp serve-build
```

## License
MIT
