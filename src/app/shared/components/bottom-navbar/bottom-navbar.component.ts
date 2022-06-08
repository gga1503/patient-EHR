import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-bottom-navbar',
  templateUrl: './bottom-navbar.component.html',
  styleUrls: ['./bottom-navbar.component.scss']
})
export class BottomNavbarComponent implements OnInit {
  patient: any = null

  constructor(
    private router: Router
  ) {
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

  async goToHome() {
    await this.router.navigate(['home']);
  }

  async goToHospitals() {
    await this.router.navigate(['hospitals']);
  }

  async goToProfile() {
    await this.router.navigate(['profile']);
  }
}
