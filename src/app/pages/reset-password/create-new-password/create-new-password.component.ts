import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {Location} from "@angular/common";

@Component({
  selector: 'app-create-new-password',
  templateUrl: './create-new-password.component.html',
  styleUrls: ['./create-new-password.component.scss']
})
export class CreateNewPasswordComponent implements OnInit {

  hide = true;
  password = new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"), Validators.email]);
  hideRequiredControl = new FormControl(false);

  constructor(
    private location: Location
  ) {
  }

  ngOnInit(): void {
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
  }
}
