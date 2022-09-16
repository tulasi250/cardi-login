import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
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
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  @Input() public Organization!: any;
  @Output() loginPageInfo = new EventEmitter<any>();
  @Output() forgotPageInfo = new EventEmitter<any>();
  constructor() {
  }

  ngOnInit(): void {
  }
  getLogPageInfo(modal: any){
    this.loginPageInfo.emit(modal);
  }
  gotoForgotPage(forgotPage: any){
    this.forgotPageInfo.emit(forgotPage);
  }

}
