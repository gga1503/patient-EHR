import {Component, Inject, OnInit} from '@angular/core';
import {MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef} from "@angular/material/bottom-sheet";
import {QRCodeComponent} from "angularx-qrcode";
import {CryptoService} from "../../services/crypto/crypto.service";

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.scss']
})
export class QrCodeComponent implements OnInit {

  // constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: string) {}
  patient = JSON.parse(<string>localStorage.getItem('patient'));
  hospital = JSON.parse(<string>localStorage.getItem('hospital'))

  constructor(private Crypto: CryptoService, private _bottomSheetRef: MatBottomSheetRef<QRCodeComponent>) {
  }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

  ngOnInit(): void {
    // alert(this.data)
  }

  async getSecretKey() {
    this.patient.ecdh = {
      privateKey: await this.Crypto.ECDH.importPrivateKey(this.patient.ecdh_private_key)
    }

    this.hospital.ecdh = {
      publicKey: await this.Crypto.ECDH.importPublicKey(this.hospital.ecdh_public_key)
    }

    return await this.Crypto.ECDH.computeSecret(this.patient.ecdh_private_key, this.hospital.ecdh.publicKey)
  }
}
