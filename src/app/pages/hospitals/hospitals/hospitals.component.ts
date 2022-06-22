import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.component.html',
  styleUrls: ['./hospitals.component.scss']
})
export class HospitalsComponent implements OnInit {
  hospitals: any = []
  placeholder = "Search Hospital";

  constructor() {
  }

  ngOnInit(): void {
    this.get_hospitals()
  }

  get_hospitals() {
    const diseases = JSON.parse(<string>sessionStorage.getItem('diseases'))

    diseases.forEach((disease: any) => {
      disease.ciphers.forEach((cipher: any) => {
        if (this.hospitals.findIndex((hospital: any) => {
          return hospital.bc_address == cipher.hospital.bc_address
        }) == -1) {
          this.hospitals.push(cipher.hospital)
        }
      })
    })
  }
}
