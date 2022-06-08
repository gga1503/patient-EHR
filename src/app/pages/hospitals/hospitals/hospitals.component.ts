import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../../shared/services/api/api.service";

@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.component.html',
  styleUrls: ['./hospitals.component.scss']
})
export class HospitalsComponent implements OnInit {
  hospitals: any = []

  constructor(private api: ApiService) {
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


    // const observable = {
    //   next: (response: any) => this.hospitals = response,
    //   error: (err: Error) => console.error(err),
    //   complete: async () => {
    //     subscription.unsubscribe()
    //   }
    // }
    //
    // const subscription = this.api.get(`hospitals/`).subscribe(observable)
  }
}
