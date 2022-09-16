import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./cardy-login/user-login/user-login.component";
export class LoginComponent {
    constructor() {
        this.loginPageInfo = new EventEmitter();
        this.forgotPageInfo = new EventEmitter();
    }
    ngOnInit() {
    }
    getLogPageInfo(modal) {
        this.loginPageInfo.emit(modal);
    }
    gotoForgotPage(forgotPage) {
        this.forgotPageInfo.emit(forgotPage);
    }
}
LoginComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: LoginComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
LoginComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: LoginComponent, selector: "cardi-login", inputs: { Organization: "Organization" }, outputs: { loginPageInfo: "loginPageInfo", forgotPageInfo: "forgotPageInfo" }, ngImport: i0, template: `
   <user-login
    [LAYOUTTYPE]="Organization?.LAYOUTTYPE"
    [BANNER]="Organization?.BANNER"
    [BANNERWIDTH]="Organization?.BANNERWIDTH"
    [LOGO]="Organization?.LOGO"
    [LOGODESCRIPTION]="Organization?.LOGODESCRIPTION"
    [POWEREDBYLOGO]="Organization?.POWEREDBYLOGO"
    [Organization]="Organization"
    (loginPage)="getLogPageInfo($event)"
    (forgotPage)="gotoForgotPage($event)"
    ></user-login>
  `, isInline: true, components: [{ type: i1.UserLoginComponent, selector: "user-login", inputs: ["LAYOUTTYPE", "BANNER", "LOGO", "LOGODESCRIPTION", "BANNERWIDTH", "POWEREDBYLOGO", "Organization"], outputs: ["loginPage", "forgotPage"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: LoginComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'cardi-login',
                    template: `
   <user-login
    [LAYOUTTYPE]="Organization?.LAYOUTTYPE"
    [BANNER]="Organization?.BANNER"
    [BANNERWIDTH]="Organization?.BANNERWIDTH"
    [LOGO]="Organization?.LOGO"
    [LOGODESCRIPTION]="Organization?.LOGODESCRIPTION"
    [POWEREDBYLOGO]="Organization?.POWEREDBYLOGO"
    [Organization]="Organization"
    (loginPage)="getLogPageInfo($event)"
    (forgotPage)="gotoForgotPage($event)"
    ></user-login>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { Organization: [{
                type: Input
            }], loginPageInfo: [{
                type: Output
            }], forgotPageInfo: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY2FyZGktbGliL2xvZ2luL3NyYy9saWIvbG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQW9CL0UsTUFBTSxPQUFPLGNBQWM7SUFJekI7UUFGVSxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDeEMsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBRW5ELENBQUM7SUFFRCxRQUFRO0lBQ1IsQ0FBQztJQUNELGNBQWMsQ0FBQyxLQUFVO1FBQ3ZCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFDRCxjQUFjLENBQUMsVUFBZTtRQUM1QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN2QyxDQUFDOzsyR0FkVSxjQUFjOytGQUFkLGNBQWMsNEtBaEJmOzs7Ozs7Ozs7Ozs7R0FZVDsyRkFJVSxjQUFjO2tCQWxCMUIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7R0FZVDtvQkFDRCxNQUFNLEVBQUUsRUFDUDtpQkFDRjswRUFFaUIsWUFBWTtzQkFBM0IsS0FBSztnQkFDSSxhQUFhO3NCQUF0QixNQUFNO2dCQUNHLGNBQWM7c0JBQXZCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NhcmRpLWxvZ2luJyxcbiAgdGVtcGxhdGU6IGBcbiAgIDx1c2VyLWxvZ2luXG4gICAgW0xBWU9VVFRZUEVdPVwiT3JnYW5pemF0aW9uPy5MQVlPVVRUWVBFXCJcbiAgICBbQkFOTkVSXT1cIk9yZ2FuaXphdGlvbj8uQkFOTkVSXCJcbiAgICBbQkFOTkVSV0lEVEhdPVwiT3JnYW5pemF0aW9uPy5CQU5ORVJXSURUSFwiXG4gICAgW0xPR09dPVwiT3JnYW5pemF0aW9uPy5MT0dPXCJcbiAgICBbTE9HT0RFU0NSSVBUSU9OXT1cIk9yZ2FuaXphdGlvbj8uTE9HT0RFU0NSSVBUSU9OXCJcbiAgICBbUE9XRVJFREJZTE9HT109XCJPcmdhbml6YXRpb24/LlBPV0VSRURCWUxPR09cIlxuICAgIFtPcmdhbml6YXRpb25dPVwiT3JnYW5pemF0aW9uXCJcbiAgICAobG9naW5QYWdlKT1cImdldExvZ1BhZ2VJbmZvKCRldmVudClcIlxuICAgIChmb3Jnb3RQYWdlKT1cImdvdG9Gb3Jnb3RQYWdlKCRldmVudClcIlxuICAgID48L3VzZXItbG9naW4+XG4gIGAsXG4gIHN0eWxlczogW1xuICBdXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgcHVibGljIE9yZ2FuaXphdGlvbiE6IGFueTtcbiAgQE91dHB1dCgpIGxvZ2luUGFnZUluZm8gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGZvcmdvdFBhZ2VJbmZvID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cbiAgZ2V0TG9nUGFnZUluZm8obW9kYWw6IGFueSl7XG4gICAgdGhpcy5sb2dpblBhZ2VJbmZvLmVtaXQobW9kYWwpO1xuICB9XG4gIGdvdG9Gb3Jnb3RQYWdlKGZvcmdvdFBhZ2U6IGFueSl7XG4gICAgdGhpcy5mb3Jnb3RQYWdlSW5mby5lbWl0KGZvcmdvdFBhZ2UpO1xuICB9XG5cbn1cbiJdfQ==