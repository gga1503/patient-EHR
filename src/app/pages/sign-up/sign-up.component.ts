import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  hide = true;

  register = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"), Validators.email]),
    password: new FormControl('', [Validators.required,Validators.pattern("[a-z0-9._%+-].{4,}")]),
    phone: new FormControl('', [Validators.pattern("[0-9 ].{9,}"), Validators.required]),
  });
  constructor() {
  }

  ngOnInit(): void {
  }
  async submit() {
  }
}
