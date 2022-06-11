import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-records-show',
  templateUrl: './records-show.component.html',
  styleUrls: ['./records-show.component.scss']
})
export class RecordsShowComponent implements OnInit {
  record = JSON.parse(<string>sessionStorage.getItem('record'))
  disease = JSON.parse(<string>sessionStorage.getItem('disease'))

  constructor(
    private location: Location
  ) {
  }

  ngOnInit(): void {
  }

  back() {
    this.location.back()
  }
}
