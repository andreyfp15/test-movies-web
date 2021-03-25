
import { Injectable } from "@angular/core";

@Injectable()
export class Helper {

    constructor() { };

    static showLoader() {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('loading');
    }

    static hideLoader() {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('loading');
    }

}