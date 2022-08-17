import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {Location} from "@angular/common";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {NotifComponent} from "../../../shared/components/notif/notif.component";


@Component({
  selector: 'app-create-new-password',
  templateUrl: './create-new-password.component.html',
  styleUrls: ['./create-new-password.component.scss']
})
export class CreateNewPasswordComponent implements OnInit {
  message = 'Your password has been successfully updated'
  hide = true;
  password = new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"), Validators.email]);
  hideRequiredControl = new FormControl(false);

  constructor(
    private location: Location,
    private route: Router,
    private notif: MatSnackBar
  ) {
  }

  ngOnInit(): void {
  }

  messageNotif() {
    this.notif.openFromComponent(NotifComponent, {
      data: this.message,
      panelClass: ['custom-notif-background'],
      duration: 3000
    });
  }

  getErrorMessage() {
    if (this.password.hasError('required')) {
      return 'You must enter a value';
    }

    return this.password.hasError('email') ? 'Not a valid email' : '';
  }

  previousPage() {
    this.location.back();
  }

  async submit() {
    this.route.navigate(['login'])
    this.messageNotif()
  }
}
