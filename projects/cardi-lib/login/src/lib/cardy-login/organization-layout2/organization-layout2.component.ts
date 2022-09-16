import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
declare var $: any;
@Component({
  selector: 'organization-layouttwo',
  templateUrl: './organization-layout2.component.html',
  styleUrls: ['./organization-layout2.component.scss']
})
export class OrganizationLayout2Component implements OnInit {
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
