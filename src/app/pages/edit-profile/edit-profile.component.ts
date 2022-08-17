import {Component, OnInit} from '@angular/core';
import {Location} from "@angular/common";
import {Router} from "@angular/router";
import {ConfirmationService} from "../../shared/services/pop-up/confirmation.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  patient = JSON.parse(<string>localStorage.getItem('patient'))

  edit = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"), Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern("[a-z0-9._%+-].{4,}")]),
    phone: new FormControl('', [Validators.pattern("[0-9 ].{9,}"), Validators.required]),
  });

  constructor(
    private location: Location,
    private router: Router,
    private dialog: ConfirmationService
  ) {
  }


  ngOnInit(): void {
  }

  onOpenDialog() {
    this.dialog.confirmationPopUp({
      title: 'Log Out Account',
      instruction: 'Are you sure want to logout from your account?',
      cancel: 'CANCEL',
      confirm: 'LOGOUT',
    })
      .subscribe((confirmed) => {
        if (confirmed) this.submit();
      });
  }

  previousPage() {
    this.location.back();
  }

  submit() {
    // localStorage.clear()
    // sessionStorage.clear()
    // await this.router.navigate(['/login'])
    // await this.messageNotif()
  }

}
