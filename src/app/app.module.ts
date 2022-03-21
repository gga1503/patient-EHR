import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KeyGenerationComponent } from './key-generation/key-generation.component';
import { EcdhComponent } from './ecdh/ecdh.component';
import { QRCodeModule } from 'angularx-qrcode';
import { RsaComponent } from './rsa/rsa.component';
// import * as CryptoJS from 'crypto-js';

@NgModule({
  declarations: [
    AppComponent,
    KeyGenerationComponent,
    EcdhComponent,
    RsaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
