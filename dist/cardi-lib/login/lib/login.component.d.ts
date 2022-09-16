import { EventEmitter, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class LoginComponent implements OnInit {
    Organization: any;
    loginPageInfo: EventEmitter<any>;
    forgotPageInfo: EventEmitter<any>;
    constructor();
    ngOnInit(): void;
    getLogPageInfo(modal: any): void;
    gotoForgotPage(forgotPage: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LoginComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LoginComponent, "cardi-login", never, { "Organization": "Organization"; }, { "loginPageInfo": "loginPageInfo"; "forgotPageInfo": "forgotPageInfo"; }, never, never>;
}
