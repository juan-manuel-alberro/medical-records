import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {CONSTANTS} from './sitewide';

@Component({
    selector: 'jm-app',
    templateUrl: 'app/app.html',
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
    public appBrand: string;

    constructor() {
        this.appBrand = CONSTANTS.MAIN.APP.BRAND;
    }
}
