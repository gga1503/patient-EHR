import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {CryptoService} from "../../../shared/services/crypto/crypto.service";


@Component({
  selector: 'app-hospitals-diseases',
  templateUrl: './hospitals-diseases.component.html',
  styleUrls: ['./hospitals-diseases.component.scss']
})
export class HospitalsDiseasesComponent implements OnInit {
  secretKey: any;
  qrData: any
  diseases: any

  patient = JSON.parse(<string>localStorage.getItem('patient'))
  hospital = JSON.parse(<string>sessionStorage.getItem('hospital'))

  constructor(private location: Location, private Crypto: CryptoService) {
  }

  async ngOnInit(): Promise<void> {

    this.qrData = {
      bc: this.hospital.bc_address,
      sk: this.hospital.ecdh.secretKey
    }
  }

  previousPage() {
    this.location.back();
  }

  get_Diseases() {
    const diseases = JSON.parse(<string>sessionStorage.getItem('diseases'))

    diseases.forEach((disease: any) => {
      disease.ciphers.forEach((cipher: any) => {
        if (this.diseases.findIndex((disease: any) => {
          return disease.bc_address == cipher.hospital.bc_address
        }) == -1) {
          this.diseases.push(cipher.disease)
        }
      })
    })
  }
}
