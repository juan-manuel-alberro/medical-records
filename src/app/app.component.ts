import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {CONSTANTS} from './sitewide';
import {I18nDirective} from 'ng2-i18next/ng2-i18next';

@Component({
    selector: 'jm-app',
    templateUrl: 'app/app.html',
    directives: [ROUTER_DIRECTIVES, I18nDirective]
})
export class AppComponent {
    public appBrand: string;

    constructor() {
        this.appBrand = CONSTANTS.MAIN.APP.BRAND;
    }
}
