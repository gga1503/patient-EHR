import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from "../../shared/services/api/api.service";
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"), Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)])
  });

  hide = true;
  hideRequiredControl = new FormControl(false);

  password = new FormControl('', [
    Validators.minLength(5),
    Validators.required,
    Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]);


  constructor(
    private api: ApiService,
    private formBuilder: FormBuilder,
    private router: Router) {
  }


  ngOnInit(): void {

  }

  async submit() {
    const target = `patients/login?email=${this.login.value.email}&password=${this.login.value.password}`
    this.api.get(target).subscribe(
      async (patient: any) => {
        patient.ecdh_private_key = localStorage.getItem('privateKey')
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
