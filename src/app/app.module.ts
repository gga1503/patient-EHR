import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {QRCodeModule} from 'angularx-qrcode';
import {HomeComponent} from './pages/home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from "@angular/flex-layout";
import {SearchBarComponent} from './components/search-bar/search-bar.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CardShowQrComponent} from './components/card-show-qr/card-show-qr.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {CardDiseasesComponent} from './components/card-diseases/card-diseases.component';
import {CardHospitalsComponent} from './components/card-hospitals/card-hospitals.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {CardDiseasesDetailComponent} from './components/card-diseases-detail/card-diseases-detail.component';
import {ButtomNavbarComponent} from './components/buttom-navbar/buttom-navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {HospitalListComponent} from './pages/hospital-list/hospital-list.component';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {QrCodeComponent} from './components/qr-code/qr-code.component';
import {MatListModule} from '@angular/material/list';
import {RecordsAllHospitalsComponent} from './pages/records-all-hospitals/records-all-hospitals.component';
import {RecordsOneHospitalComponent} from './pages/records-one-hospital/records-one-hospital.component';
import {LoginComponent} from './pages/login/login.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCheckboxModule} from "@angular/material/checkbox";
import { SignUpComponent } from './pages/sign-up/sign-up.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchBarComponent,
    CardShowQrComponent,
    CardDiseasesComponent,
    CardHospitalsComponent,
    CardDiseasesDetailComponent,
    ButtomNavbarComponent,
    HospitalListComponent,
    QrCodeComponent,
    RecordsAllHospitalsComponent,
    RecordsOneHospitalComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QRCodeModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatBottomSheetModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
