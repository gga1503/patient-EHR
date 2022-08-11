import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  hide = true;
  email = new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"), Validators.email]);
  hideRequiredControl = new FormControl(false);

  constructor(
    private location: Location
  ) {
  }

  ngOnInit(): void {
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  previousPage() {
    this.location.back();
  }

  async submit() {
  }

}
