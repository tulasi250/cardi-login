import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginComponent } from './user-login/user-login.component';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';
import { PasswordModule } from 'primeng/password';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { OrganizationBannerComponent } from './organization-banner/organization-banner.component';
import { OrganizationLogoComponent } from './organization-logo/organization-logo.component';
import { OrganizationLayout1Component } from './organization-layout1/organization-layout1.component';
import { OrganizationLayout2Component } from './organization-layout2/organization-layout2.component';
import { OrganizationLayout3Component } from './organization-layout3/organization-layout3.component';
import { RippleModule } from 'primeng/ripple';
import { TermsConditionComponent } from './terms-condition/terms-condition.component';
import { PoweredByComponent } from './powered-by/powered-by.component';
import { OrganizationUserComponent } from './organization-user/organization-user.component';

@NgModule({
  declarations: [
    UserLoginComponent,
    OrganizationBannerComponent,
    OrganizationLogoComponent,
    OrganizationLayout1Component,
    OrganizationLayout2Component,
    OrganizationLayout3Component,
    TermsConditionComponent,
    PoweredByComponent,
    OrganizationUserComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    FormsModule,
    ReactiveFormsModule,
    RippleModule,
    CheckboxModule,
    ButtonModule,
    DropdownModule,
    ToastModule,
    PasswordModule,
  ],
  exports: [
    UserLoginComponent,
    OrganizationBannerComponent,
    OrganizationLogoComponent,
    OrganizationLayout1Component,
    OrganizationLayout2Component,
    OrganizationLayout3Component,
    TermsConditionComponent,
    PoweredByComponent,
    OrganizationUserComponent
  ],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class CardyLoginModule { }
