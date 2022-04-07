import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QRCodeModule } from 'angularx-qrcode';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FlexLayoutModule} from "@angular/flex-layout";
import { SearchBarComponent } from './search-bar/search-bar.component';
import {FormsModule} from "@angular/forms";
import { CardShowQrComponent } from './card-show-qr/card-show-qr.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { CardDiseasesComponent } from './card-diseases/card-diseases.component';
import { CardHospitalsComponent } from './card-hospitals/card-hospitals.component';
import {MatGridListModule} from "@angular/material/grid-list";
import { CardDiseasesDetailComponent } from './card-diseases-detail/card-diseases-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchBarComponent,
    CardShowQrComponent,
    CardDiseasesComponent,
    CardHospitalsComponent,
    CardDiseasesDetailComponent,
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
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
