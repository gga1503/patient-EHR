import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../../shared/services/api/api.service";

@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.component.html',
  styleUrls: ['./hospitals.component.scss']
})
export class HospitalsComponent implements OnInit {
  hospitals: any

  constructor(private api: ApiService) {
  }

  ngOnInit(): void {
    this.get_hospitals()
  }

  get_hospitals() {
    const observable = {
      next: (response: any) => this.hospitals = response,
      error: (err: Error) => console.error(err),
      complete: async () => {
        subscription.unsubscribe()
      }
    }

    const subscription = this.api.get(`hospitals/`).subscribe(observable)
  }

}
