import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'card-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.scss']
})
export class HospitalComponent implements OnInit {
  @Input() hospital: any

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    console.log(this.hospital)
  }

  async choose_hospital() {
    const diseases = JSON.parse(<string>sessionStorage.getItem('diseases'))
    this.hospital.diseases = []

    diseases.forEach((disease: any) => {
      disease.ciphers.forEach((cipher: any) => {
          if (cipher.hospital.bc_address == this.hospital.bc_address) {
            const object = {
              name: disease.name,
              cipher: cipher.name,
              date: cipher.date,
              _id: cipher._id
            }

            this.hospital.diseases.push(object)
          }
        }
      )
    })

    sessionStorage.setItem('hospital', JSON.stringify(this.hospital))

    await this.router.navigate(['hospitals/diseases'])
  }
}
