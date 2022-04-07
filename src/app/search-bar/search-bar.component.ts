import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  placeHolders: string = "Search Disease";

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(searchBar: NgForm) {
    this.router.navigate(['searchBar', searchBar.value.search]);
    console.log("search submitted")
  }
}