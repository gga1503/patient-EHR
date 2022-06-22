import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {CryptoService} from "../../../shared/services/crypto/crypto.service";

// import {DisplayText} from "../../../shared/components/cards/card-show-qr/card-show-qr.component";


@Component({
  selector: 'app-hospitals-diseases',
  templateUrl: './hospitals-diseases.component.html',
  styleUrls: ['./hospitals-diseases.component.scss']
})
export class HospitalsDiseasesComponent implements OnInit {
  secretKey: any;

  info = {
    title: 'Secret Key QR Code',
    des: 'Show Secret QR Code to give access to your medical records in this hospital',
  };

  patient = JSON.parse(<string>localStorage.getItem('patient'))
  hospital = JSON.parse(<string>sessionStorage.getItem('hospital'))
  diseases = JSON.parse(<string>sessionStorage.getItem('hospital-diseases'))

  qr = {
    bc: this.hospital.bc_address,
    sk: this.hospital.ecdh.secretKey
  }

  constructor(private location: Location) {
  }

  async ngOnInit(): Promise<void> {

  }

  previousPage() {
    this.location.back();
  }
}
