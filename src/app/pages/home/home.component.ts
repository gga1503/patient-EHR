import {Component, OnInit} from '@angular/core';
import {CryptoService} from '../../shared/services/crypto/crypto.service';
import {SearchBarComponent} from "../../shared/components/search-bar/search-bar.component";
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import {QrCodeComponent} from "../../shared/components/qr-code/qr-code.component";
import {Router} from "@angular/router";
import {ApiService} from "../../shared/services/api/api.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  placeHolders = "Search Disease";
  patient = JSON.parse(<string>localStorage.getItem('patient'));

  disease_groups: any = [];
  diseases: any = [];

  myAngularxQrCode: any;
  myAngularxQrCodeA: string;

  constructor(private Crypto: CryptoService, private router: Router,
              private api: ApiService) {
    this.myAngularxQrCodeA = 'Blabla';
  }

  async ngOnInit(): Promise<void> {
    this.get_records()
    console.log(this.patient)
  }

  get_records(): void {
    this.api.get(`patients/${this.patient.bc_address}/diseases`).subscribe(
      async response => {
        await this.decrypt(response)

        // await this.decrypt(this.hospitals[0])
        // this.disease_groups = response
        // console.log(response)
      })
  }

  async decrypt(groups: any) {

    for (let i = 0; i < groups.length; i++) {
      const secret_key = await this.generateKeys(groups[i].hospital)

      for (let j = 0; j < groups[i].diseases.length; j++) {
        const session_key = await this.Crypto.Hash.SHA512(secret_key + groups[i].diseases[j].date, true)
        // console.log('cipher', groups[i].diseases[j].name)
        // console.log('session key', session_key)
        // console.log('patient iv', this.patient.iv)

        const disease_name = this.Crypto.AES.decrypt(
          groups[i].diseases[j].name,
          session_key,
          this.patient.iv
        )

        console.log('disease name', disease_name)
      }
    }

  }

  // new_model_data(disease_name: string, hospital: any) {
  //   this.disease_groups = groups[i].diseases[j].decrypted.find((e: any) => {
  //     let disease_name = e.group.disease.name
  //
  //     if (!this.disease_groups) {
  //       this.disease_groups = {
  //         disease: {name: disease_name},
  //         hospitals: [hospital]
  //       }
  //
  //       this.diseases.decrypted.push(this.disease_groups)
  //     }
  //   })
  // }

  async generateKeys(hospital: any) {
    hospital.ecdh = {
      publicKey: await this.Crypto.ECDH.importPublicKey(hospital.ecdh_public_key, 'P-256'),
    }

    this.patient.ecdh = {
      privateKey: await this.Crypto.ECDH.importPrivateKey(this.patient.ecdh_private_key, "P-256")
    }

    const secret_key = await this.Crypto.ECDH.computeSecret(this.patient.ecdh.privateKey, hospital.ecdh.publicKey)

    return await this.Crypto.Hash.SHA512(secret_key, true)
  }


}
