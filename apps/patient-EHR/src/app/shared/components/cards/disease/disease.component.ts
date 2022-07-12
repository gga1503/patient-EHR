import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'card-disease',
  templateUrl: './disease.component.html',
  styleUrls: ['./disease.component.scss']
})
export class DiseaseComponent implements OnInit {
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
