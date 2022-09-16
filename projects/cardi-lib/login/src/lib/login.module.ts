import { NgModule } from '@angular/core';
import { CardyLoginModule } from './cardy-login/cardy-login.module';
import { LoginComponent } from './login.component';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CardyLoginModule
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
