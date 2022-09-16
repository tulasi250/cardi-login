import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'organization-user',
  templateUrl: './organization-user.component.html',
  styleUrls: ['./organization-user.component.scss']
})
export class OrganizationUserComponent implements OnInit {
  @ViewChild('showhideinput') input: any;
  @Input() public POWEREDBYLOGO!: string;
  @Output() loginDetails = new EventEmitter<any>();
  @Output() forgotPage = new EventEmitter<any>();
  @Output() termsCondition = new EventEmitter<any>();
  value3!: string;
  cities: any[] = [];
  selectedCity1!: any;
  loginForm!: FormGroup;
  show!: boolean;
  disabledLoginPage!: boolean;
  submitStatus!: string;
  errorStatus?: string;
  closeResult = '';

  isAuthenticated$!: Observable<any>;
  constructor( private fb: FormBuilder) {
    this.submitStatus = 'LOGIN';
    this.disabledLoginPage = false;
   }

  ngOnInit(): void {
    this.initializeForm();
  }
  initializeForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('^[0-9a-zA-Z.-]+[@][0-9a-zA-Z.-]+[.][0-9a-zA-Z]{2,}$')]],
      password: ['', Validators.required],
      conditions: ['', Validators.required]
    });
  }
  login() {
    this.submitStatus = 'Please wait ...';
    this.errorStatus = '';
    const loginform = this.loginForm.getRawValue();
    this.loginDetails.emit(loginform);
  }

  toggleShow() {
    this.show = !this.show;
    if (this.show) {
      this.input.nativeElement.type = 'text';
    } else {
      this.input.nativeElement.type = 'password';
    }
  }
  routeToChangePassword(){
    this.forgotPage.emit(true);
  }
  open(){
    this.termsCondition.emit(true);
  }
  routeToQuickRegistration(){

  }
}
