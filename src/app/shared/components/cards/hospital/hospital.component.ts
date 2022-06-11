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

  async show() {
    const diseases = JSON.parse(<string>sessionStorage.getItem('diseases'))

    diseases.forEach((disease: any, i: number, diseases: any) => {
      disease.ciphers.forEach((cipher: any, j: number, ciphers: any) => {
          if (cipher.hospital.bc_address != this.hospital.bc_address) {
            ciphers.splice(j, 1)
          }
        }
      )

      if (disease.ciphers.length == 0) {
        diseases.splice(i, 1)
      }
    })

    sessionStorage.setItem('hospital-diseases', JSON.stringify(diseases))
    sessionStorage.setItem('hospital', JSON.stringify(this.hospital))
    await this.router.navigate(['hospitals/diseases'])
  }
}
