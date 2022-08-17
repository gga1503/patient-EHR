import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-bottom-navbar',
  templateUrl: './bottom-navbar.component.html',
  styleUrls: ['./bottom-navbar.component.scss']
})
export class BottomNavbarComponent implements OnInit {
  patient: any = null
  navbarfixed: boolean = false;

  constructor(
    private router: Router
  ) {
  }

  @HostListener('window:scroll', ['$event']) onscroll() {
    if (window.scrollY > 100) {
      this.navbarfixed = true;
    } else {
      this.navbarfixed = false;
    }
  }

  async ngOnInit(): Promise<void> {
    await this.checkSession()

    this.patient = JSON.parse(<string>localStorage.getItem('patient'))
  }

  async checkSession() {
    if (!localStorage.getItem('patient')) {
      await this.router.navigate(['login'])
    }
  }

}
