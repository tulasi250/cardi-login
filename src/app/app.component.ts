import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public Org = {
    LAYOUTTYPE:1,
    BANNER: 'assets/images/court.png',
    BANNERWIDTH: 70,
    LOGO: 'assets/images/jjis_logo.png',
    LOGODESCRIPTION: 'Juvenile Justice Information System',
    POWEREDBYLOGO: "assets/images/cardinality-logo_text.svg"
  };
  // public Org = {
  //   LAYOUTTYPE: 2,
  //   BANNER: 'assets/images/login1.png',
  //   BANNERWIDTH: 100,
  //   LOGO: 'assets/images/georgia-dchLogo2.png',
  //   LOGODESCRIPTION: 'Case Management System',
  //   POWEREDBYLOGO: "assets/images/cardinality-logo_text.svg"
  // };
  // public Org = {
  //   LAYOUTTYPE: 3,
  //   BANNER: 'assets/images/login.png',
  //   BANNERWIDTH: 100, // It should be 100%
  //   LOGO: 'assets/images/georgia-dchLogo2.png',
  //   LOGODESCRIPTION: 'Juvenile Justice Management System',
  //   POWEREDBYLOGO: "assets/images/cardinality-logo_text.svg"
  // };
  //   public Org = {
  //   LAYOUTTYPE: 1,
  //   BANNER: 'assets/images/fssa-login-bg.png',
  //   BANNERWIDTH: 100,
  //   LOGO: 'assets/images/indiana-logo2.png',
  //   LOGODESCRIPTION: '',
  //   POWEREDBYLOGO: "assets/images/cardinality-logo_text.svg"
  // };
  getLogPageInfo(modal: any){
    console.log(modal, 'app page');
  }
  gotoForgotPage(forgotPage: any){
    console.log(forgotPage, 'forgotPage');
  }
}
