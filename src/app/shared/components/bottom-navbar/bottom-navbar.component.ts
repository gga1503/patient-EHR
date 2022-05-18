import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-bottom-navbar',
  templateUrl: './bottom-navbar.component.html',
  styleUrls: ['./bottom-navbar.component.scss']
})
export class BottomNavbarComponent implements OnInit {

  constructor(
    private router: Router
  ) {
  }

  async ngOnInit(): Promise<void> {
    await this.checkSession()
  }

  async checkSession() {
    if (!localStorage.getItem('patient')) {
      await this.router.navigate(['login'])
    }
  }
}
