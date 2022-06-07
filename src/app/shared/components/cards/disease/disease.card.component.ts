import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'card-disease',
  templateUrl: './disease.card.component.html',
  styleUrls: ['./disease.card.component.scss']
})
export class DiseaseCardComponent implements OnInit {
  @Input() disease: any

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  async goToRecords() {
    sessionStorage.setItem('disease', JSON.stringify(this.disease))
    await this.router.navigate(['records'])
  }
}
