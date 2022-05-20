import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {ApiService} from "../../shared/services/api/api.service";
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;
  email = new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"), Validators.email]);
  hideRequiredControl = new FormControl(false);

  // password = new FormControl('', [Validators.required]);

  login = this.formBuilder.group({
    "password": "patient123",
    "email": "patient@gmail.com"
  })

  constructor(
    private api: ApiService,
    private formBuilder: FormBuilder,
    private router: Router) {
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  ngOnInit(): void {
  }

  async submit() {
    const target = `patients/login?email=${this.login.value.email}&password=${this.login.value.password}`
    this.api.get(target).subscribe(
      async (patient: any) => {
        patient.ecdh_private_key = 'MIGHAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBG0wawIBAQQgw+rDCZnzRCNqqhLatYv2LVlAMQHrSmpbkpadE5jfbrahRANCAATyiIVnvpjAcF1diQsyCPK23opmj74dM57iRIyJRgu9N0+PKS+q7qF/+xtxrnBv+x8hKT2vOVwsSVVyEbLRDbFH'
        localStorage.setItem('patient', JSON.stringify(patient))
      },
      (err: any) => console.error(err),
      async () => {
        const patient = JSON.parse(<string>localStorage.getItem('patient'))
        console.log(`Patient ${patient.name} has been logged in sucessfully!`)
        await this.router.navigate(['/home']);
      }
    );
  }
}
