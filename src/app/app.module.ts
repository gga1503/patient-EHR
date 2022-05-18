import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HospitalListComponent} from './pages/hospital-list/hospital-list.component';
import {LoginComponent} from './pages/login/login.component';
import {SignUpComponent} from './pages/sign-up/sign-up.component';

import {SharedModule} from "./shared/shared.module";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HospitalListComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
