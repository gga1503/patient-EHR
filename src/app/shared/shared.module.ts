import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatBottomSheetModule} from "@angular/material/bottom-sheet";
import {MatListModule} from "@angular/material/list";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {CardShowQrComponent} from "./components/cards/card-show-qr/card-show-qr.component";
import {DiseaseComponent} from "./components/cards/disease/disease.component";
import {HospitalComponent} from "./components/cards/hospital/hospital.component";
import {RecordComponent} from "./components/cards/record/record.component";
import {SearchBarComponent} from "./components/search-bar/search-bar.component";
import {BottomNavbarComponent} from "./components/bottom-navbar/bottom-navbar.component";
import {QrCodeComponent} from "./components/qr-code/qr-code.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {QRCodeModule} from "angularx-qrcode";
import {RouterModule} from '@angular/router';
import {NotifComponent} from './components/notif/notif.component';
import {PopUpConfirmationComponent} from './components/pop-up-confirmation/pop-up-confirmation.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    CardShowQrComponent,
    DiseaseComponent,
    HospitalComponent,
    RecordComponent,
    SearchBarComponent,
    BottomNavbarComponent,
    QrCodeComponent,
    NotifComponent,
    PopUpConfirmationComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatToolbarModule,
    MatBottomSheetModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    QRCodeModule,
    RouterModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  exports: [
    CardShowQrComponent,
    DiseaseComponent,
    HospitalComponent,
    RecordComponent,
    SearchBarComponent,
    BottomNavbarComponent,
    QrCodeComponent,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule {
}
