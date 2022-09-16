import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
declare var $: any;
@Component({
  selector: 'organization-layoutone',
  templateUrl: './organization-layout1.component.html',
  styleUrls: ['./organization-layout1.component.scss']
})
export class OrganizationLayout1Component implements OnInit {
  @Input() public LAYOUTTYPE!: number;
  @Input() public BANNER!: string;
  @Input() public LOGO!: string;
  @Input() public LOGODESCRIPTION!: string;
  @Input() public BANNERWIDTH!: string;
  @Input() public POWEREDBYLOGO!: string;
  @Output() loginPageInfo = new EventEmitter<any>();
  @Output() forgotPageInfo = new EventEmitter<any>();

  constructor(
  ) {

  }
  ngOnInit() {
  }
  openTermsCondition(page: any) {
    if(page){
      $('#termsandCondition').modal('show');
    }
  }
  login(loginform: any) {
    this.loginPageInfo.emit(loginform);
  }
  routeToForgotPage(page: any) {
    if(page){
      this.forgotPageInfo.emit(page);
    }
  }
}
