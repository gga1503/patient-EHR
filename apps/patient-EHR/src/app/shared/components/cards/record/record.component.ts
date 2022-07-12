import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'card-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss']
})
export class RecordComponent implements OnInit {

  @Input() record: any;

  constructor() {
  }

  ngOnInit(): void {
  }
}
