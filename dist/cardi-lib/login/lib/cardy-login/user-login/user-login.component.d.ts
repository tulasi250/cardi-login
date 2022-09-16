import { EventEmitter, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class UserLoginComponent implements OnInit {
    input: any;
    LAYOUTTYPE: number;
    BANNER: string;
    LOGO: string;
    LOGODESCRIPTION: string;
    BANNERWIDTH: string;
    POWEREDBYLOGO: string;
    Organization: any;
    loginPage: EventEmitter<any>;
    forgotPage: EventEmitter<any>;
    constructor();
    ngOnInit(): void;
    getLogPageInfo(modal: any): void;
    gotoForgotPage(forgotPage: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<UserLoginComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UserLoginComponent, "user-login", never, { "LAYOUTTYPE": "LAYOUTTYPE"; "BANNER": "BANNER"; "LOGO": "LOGO"; "LOGODESCRIPTION": "LOGODESCRIPTION"; "BANNERWIDTH": "BANNERWIDTH"; "POWEREDBYLOGO": "POWEREDBYLOGO"; "Organization": "Organization"; }, { "loginPage": "loginPage"; "forgotPage": "forgotPage"; }, never, never>;
}
