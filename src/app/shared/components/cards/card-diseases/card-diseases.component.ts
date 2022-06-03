import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-card-diseases',
  templateUrl: './card-diseases.component.html',
  styleUrls: ['./card-diseases.component.scss']
})
export class CardDiseasesComponent implements OnInit, OnChanges {
  @Input() diseases: any

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(this.disease_groups)
  }

}
