import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {NotifComponent} from "../../shared/components/notif/notif.component";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ConfirmationService} from "../../shared/services/pop-up/confirmation.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  patient: any
  message = 'You have successfully been logged out'

  constructor(
    private router: Router,
    private notif: MatSnackBar,
    private dialog: ConfirmationService) {
  }

  async ngOnInit(): Promise<void> {
    await this.getPatientData()
  }

  async getPatientData() {
    this.patient = JSON.parse(<string>localStorage.getItem('patient'))
  }

  onOpenDialog() {
    this.dialog.confirmationPopUp({
      title: 'Log Out Account',
      instruction: 'Are you sure want to logout from your account?',
      cancel: 'CANCEL',
      confirm: 'LOGOUT',
    })
      .subscribe((confirmed) => {
        if (confirmed) this.logout();
      });
  }

  onOpenNotif() {
    this.messageNotif(this.message);
  }

  messageNotif(message: string) {
    this.notif.openFromComponent(NotifComponent, {
      data: message,
      panelClass: ['custom-notif-background'],
      duration: 3000
    });
  }

  async logout() {
    localStorage.removeItem('patient')
    await this.router.navigate(['/login'])
    this.onOpenNotif()
  }

}
