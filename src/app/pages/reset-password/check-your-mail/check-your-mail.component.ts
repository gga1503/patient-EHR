import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-check-your-mail',
  templateUrl: './check-your-mail.component.html',
  styleUrls: ['./check-your-mail.component.scss']
})
export class CheckYourMailComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"), Validators.email]);

  constructor(private location: Location) {
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
