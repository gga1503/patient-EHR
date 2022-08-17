import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import {ApiService} from "../../shared/services/api/api.service";
import {Router} from "@angular/router";
import {CryptoService} from "../../shared/services/crypto/crypto.service";
import {NotifComponent} from "../../shared/components/notif/notif.component";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  hide = true;
  hideRequiredControl = new FormControl(false);
  message = 'Your account has been successfully created'
  data: any;

  options = [
    {value: 'female', viewValue: 'Female'},
    {value: 'male', viewValue: 'Male'}
  ]

  selectedOption = this.options

  patient = new FormGroup({
    name: new FormControl('Valerie', [Validators.required]),
    email: new FormControl('valeriee@gmail.com', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"), Validators.email]),
    password: new FormControl('valerie123', [Validators.required, Validators.pattern("[a-z0-9._%+-].{4,}")]),
    dob: new FormControl(),
    bc_address: new FormControl('0xafeEb9069Aafc36473234829d00061502bB21ED9'),
    gender: new FormControl(this.options[0].value),
    phone: new FormControl('08787655124', [Validators.pattern("[0-9 ].{9,}"), Validators.required]),
    address: new FormControl(),
    ecdh: new FormGroup({
      public_key: new FormControl('')
    }),
    iv: new FormControl('AT8jTu6lyuG+fg==')
  })

  constructor(
    private api: ApiService,
    private formBuilder: FormBuilder,
    private route: Router,
    private Crypto: CryptoService,
    private notif: MatSnackBar
  ) {
  }

  async ngOnInit(): Promise<void> {

  }

  async generateKeys() {
    const keys = await this.Crypto.ECDH.generateKeys()
    this.patient.patchValue({
      ecdh: {
        public_key: keys.publicKey.replace('-----BEGIN PUBLIC KEY-----', '')
          .replace('-----END PUBLIC KEY-----', '')
      }
    })

    localStorage.setItem('privateKey', keys.privateKey.replace('-----BEGIN PRIVATE KEY-----', '')
      .replace('-----END PRIVATE KEY-----', ''))
  }

  messageNotif() {
    this.notif.openFromComponent(NotifComponent, {
      data: this.message,
      panelClass: ['custom-notif-background'],
      duration: 3000
    });
  }

  async submit() {
    await this.generateKeys()

    const observable = {
      next: (response: any) => {
        console.log(response)
        this.route.navigate(['login'])
        this.messageNotif()
      },
      error: (err: Error) => console.error(err),
      complete: () => subscription.unsubscribe()
    }

    const subscription = this.api.post('patients', this.patient.value).subscribe(observable)
  }
}
