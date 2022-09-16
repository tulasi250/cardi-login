import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  @ViewChild('showhideinput') input: any;
  @Input() public LAYOUTTYPE!: number;
  @Input() public BANNER!: string;
  @Input() public LOGO!: string;
  @Input() public LOGODESCRIPTION!: string;
  @Input() public BANNERWIDTH!: string;
  @Input() public POWEREDBYLOGO!: string;
  @Input() public Organization!: any;
  @Output() loginPage = new EventEmitter<any>();
  @Output() forgotPage = new EventEmitter<any>();
  constructor(
  ) {

  }
  ngOnInit() {
  }

   getLogPageInfo(modal: any){
     this.loginPage.emit(modal);
   }
   gotoForgotPage(forgotPage: any){
    this.forgotPage.emit(forgotPage);
   }
}
