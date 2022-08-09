import {Component, OnInit} from '@angular/core';
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
