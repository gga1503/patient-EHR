import {Component, OnInit} from '@angular/core';

import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FormBuilder, FormControl} from "@angular/forms";
import {ApiService} from "../../shared/services/api/api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  hide = true;
  hideRequiredControl = new FormControl(false);

  register = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"), Validators.email]),
    password: new FormControl('', [Validators.required,Validators.pattern("[a-z0-9._%+-].{4,}")]),
    phone: new FormControl('', [Validators.pattern("[0-9 ].{9,}"), Validators.required]),
  });

  signUp = this.formBuilder.group({
    name: '',
    email: '',
    password: '',
    phone: '',
  })

  constructor(
    private api: ApiService,
    private formBuilder: FormBuilder,
    private route: Router
  ) {
  }

  ngOnInit(): void {
  }


  submit() {
    const observable = {
      next: (response: any) => console.log(response),
      error: (err: Error) => console.error(err),
      complete: async () => {
        subscription.unsubscribe()
        await this.route.navigate(['login'])
        console.log('yey berhasil')
      }
    }

    const subscription = this.api.post('patients', this.signUp).subscribe(observable)
  }

}
