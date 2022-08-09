import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'section-diseases',
  templateUrl: './diseases.component.html',
  styleUrls: ['./diseases.component.scss']
})
export class DiseasesComponent implements OnInit {
  searchDisease: any
  @Input() placeholder: any
  @Input() diseases: any

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  async goToRecords(disease: any) {
    sessionStorage.setItem('disease', JSON.stringify(disease))
    await this.router.navigate(['records'])
  }
}
