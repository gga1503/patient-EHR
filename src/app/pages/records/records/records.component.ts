import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss']
})
export class RecordsComponent implements OnInit {
  diseases = JSON.parse(<string>sessionStorage.getItem('disease'))

  constructor() {
  }

  ngOnInit(): void {
  }

}
