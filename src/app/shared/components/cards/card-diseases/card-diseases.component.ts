import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-diseases',
  templateUrl: './card-diseases.component.html',
  styleUrls: ['./card-diseases.component.scss']
})
export class CardDiseasesComponent implements OnInit {
  @Input() diseases: any;

  constructor() {
  }

  ngOnInit(): void {
  }

}
