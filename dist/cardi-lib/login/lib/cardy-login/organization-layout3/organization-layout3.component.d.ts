import { EventEmitter, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class OrganizationLayout3Component implements OnInit {
    LAYOUTTYPE: number;
    BANNER: string;
    LOGO: string;
    LOGODESCRIPTION: string;
    BANNERWIDTH: string;
    POWEREDBYLOGO: string;
    loginPageInfo: EventEmitter<any>;
    forgotPageInfo: EventEmitter<any>;
    constructor();
    ngOnInit(): void;
    openTermsCondition(page: any): void;
    login(loginform: any): void;
    routeToForgotPage(page: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<OrganizationLayout3Component, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<OrganizationLayout3Component, "organization-layoutthree", never, { "LAYOUTTYPE": "LAYOUTTYPE"; "BANNER": "BANNER"; "LOGO": "LOGO"; "LOGODESCRIPTION": "LOGODESCRIPTION"; "BANNERWIDTH": "BANNERWIDTH"; "POWEREDBYLOGO": "POWEREDBYLOGO"; }, { "loginPageInfo": "loginPageInfo"; "forgotPageInfo": "forgotPageInfo"; }, never, never>;
}
