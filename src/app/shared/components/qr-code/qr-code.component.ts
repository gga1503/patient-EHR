import {Component, Inject, OnInit} from '@angular/core';
import {MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef} from "@angular/material/bottom-sheet";
import {QRCodeComponent} from "angularx-qrcode";

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.scss']
})
export class QrCodeComponent implements OnInit {

  // constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: string) {}

  constructor(private _bottomSheetRef: MatBottomSheetRef<QRCodeComponent>) {
  }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

  ngOnInit(): void {
    // alert(this.data)
  }
}
