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
  patient = JSON.parse(<string>localStorage.getItem('patient'))
  message = 'You have successfully been logged out'
  hide = true;
  
  constructor(
    private router: Router,
    private notif: MatSnackBar,
    private dialog: ConfirmationService) {
  }

  async ngOnInit(): Promise<void> {
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

  messageNotif() {
    this.notif.openFromComponent(NotifComponent, {
      data: this.message,
      panelClass: ['custom-notif-background'],
      duration: 3000
    });
  }

  async logout() {
    localStorage.clear()
    sessionStorage.clear()
    await this.router.navigate(['/login'])
    await this.messageNotif()
  }
}
