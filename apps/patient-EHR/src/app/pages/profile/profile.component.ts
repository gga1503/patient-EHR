import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  patient: any

  constructor() {
  }

  ngOnInit(): void {
    this.patient = JSON.parse(<string>localStorage.getItem('patient'))
  }

}
