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

  patient = JSON.parse(<string>localStorage.getItem('patient'))
  hospital = JSON.parse(<string>sessionStorage.getItem('hospital'))
  diseases = JSON.parse(<string>sessionStorage.getItem('hospital-diseases'))

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
}
