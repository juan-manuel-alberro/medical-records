import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode, provide} from '@angular/core';
import {disableDeprecatedForms, provideForms} from '@angular/forms';
import {AppComponent} from './app.component';
import {APP_ROUTER_PROVIDERS} from './app.routes';

import 'i18next';
import 'i18nextXHRBackend';
import 'i18nextBrowserLanguageDetector';

import {I18nService, I18nServiceConfig} from 'ng2-i18next/ng2-i18next';

declare var i18nextBrowserLanguageDetector: any;
declare var i18nextXHRBackend: any;

declare var ENV: string;

if (ENV === 'production') {
    enableProdMode();
}

bootstrap(AppComponent, [
    disableDeprecatedForms(),
    provideForms(),
    APP_ROUTER_PROVIDERS,
    provide(I18nServiceConfig, {
      useValue: {
        use: [i18nextBrowserLanguageDetector, i18nextXHRBackend],
        config: {
          detection: { order: ['navigator'] },
          fallbackLng: false,
          load: 'currentOnly',
          resGetPath: 'locales/__lng__/__ns__.json',
          caches: ['localStorage', 'cookie']
        }
      }
    }),
    I18nService
]);
