import {Component, Inject} from '@angular/core';
import {MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef} from "@angular/material/bottom-sheet";
import {QRCodeComponent} from "angularx-qrcode";

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.scss']
})
export class QrCodeComponent {
  patient = JSON.parse(<string>localStorage.getItem('patient'));

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: string,
    private _bottomSheetRef: MatBottomSheetRef<QRCodeComponent>) {
  }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
