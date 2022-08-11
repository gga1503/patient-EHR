import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginComponent} from './pages/login/login.component';
import {SignUpComponent} from './pages/sign-up/sign-up.component';

import {SharedModule} from "./shared/shared.module";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {ProfileComponent} from './pages/profile/profile.component';
import {EditProfileComponent} from './pages/edit-profile/edit-profile.component';
import {MatRadioModule} from "@angular/material/radio";
import {ForgotPasswordComponent} from './pages/reset-password/forgot-password/forgot-password.component';
import {CheckYourMailComponent} from './pages/reset-password/check-your-mail/check-your-mail.component';
import {CreateNewPasswordComponent} from './pages/reset-password/create-new-password/create-new-password.component';
import {Ng2SearchPipeModule} from "ng2-search-filter";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    ProfileComponent,
    EditProfileComponent,
    ForgotPasswordComponent,
    CheckYourMailComponent,
    CreateNewPasswordComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
