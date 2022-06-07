import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {CryptoService} from "../../../shared/services/crypto/crypto.service";


@Component({
  selector: 'app-hospitals-records',
  templateUrl: './hospitals-records.component.html',
  styleUrls: ['./hospitals-records.component.scss']
})
export class HospitalsRecordsComponent implements OnInit {
  secretKey: any;
  qrData: any

  patient = JSON.parse(<string>localStorage.getItem('patient'))
  hospital = JSON.parse(<string>sessionStorage.getItem('hospital'))

  constructor(private location: Location, private Crypto: CryptoService) {
  }

  async ngOnInit(): Promise<void> {
    this.secretKey = await this.getSecretKey()

    this.qrData = {
      bc: this.hospital.bc_address,
      sk: this.secretKey
    }
  }

  previousPage() {
    this.location.back();
  }

  async getSecretKey() {
    this.patient.ecdh = {
      privateKey: await this.Crypto.ECDH.importPrivateKey(this.patient.ecdh_private_key)
    }

    this.hospital.ecdh = {
      publicKey: await this.Crypto.ECDH.importPublicKey(this.hospital.ecdh_public_key)
    }

    return await this.Crypto.ECDH.computeSecret(this.patient.ecdh.privateKey, this.hospital.ecdh.publicKey)
  }

}
