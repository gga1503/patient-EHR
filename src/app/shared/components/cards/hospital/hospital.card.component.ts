import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'card-hospital',
  templateUrl: './hospital.card.component.html',
  styleUrls: ['./hospital.card.component.scss']
})
export class HospitalCardComponent implements OnInit {
  @Input() hospital: any

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    console.log(this.hospital)
  }

  async choose_hospital(hospital: any) {
    sessionStorage.setItem('hospital', JSON.stringify(hospital))
    await this.router.navigate(['hospitals/records'])
  }

}
