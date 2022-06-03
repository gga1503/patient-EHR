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

  diseases: any = [];

  constructor(private Crypto: CryptoService, private router: Router,
              private api: ApiService) {
  }

  async ngOnInit(): Promise<void> {
    this.patient.ecdh = {
      privateKey: await this.Crypto.ECDH.importPrivateKey(this.patient.ecdh_private_key)
    }

    this.getRecords()
  }

  getRecords(): void {
    this.api.get(`patients/${this.patient.bc_address}/diseases`).subscribe(
      async response => {
        await this.decrypt(response)
      })
  }

  async decrypt(groups: any) {
    for (let i = 0; i < groups.length; i++) {
      await this.generateKeys(groups[i].hospital)
      for (let j = 0; j < groups[i].diseases.length; j++) {
        // const session_key = await this.Crypto.Hash.SHA512(secret_key/* + groups[i].diseases[j].date*/, true)

        const disease_name = this.Crypto.AES.decrypt(
          groups[i].diseases[j].name,
          groups[i].hospital.ecdh.secretKey,
          this.patient.iv
        )

        this.group_decrypted(
          disease_name,
          groups[i].hospital,
          groups[i].diseases[j]
        )
      }
    }

    console.log(this.diseases)
  }

  /**
   * Group the hospitals & ciphers by the decrypted diseases name
   * @param disease_name decrypted disease name
   * @param hospital hospital object
   * @param cipher original disease cipher
   */
  group_decrypted(disease_name: string, hospital: any, cipher: any) {
    let index = this.diseases.findIndex((e: any) => {
      return e.name == disease_name
    })

    if (index == -1) {
      const group = {
        name: disease_name,
        ciphers: [{hospital, cipher}]
      }

      this.diseases.push(group)
    } else {
      this.diseases[index].ciphers.push({hospital, cipher})
    }
  }

  async generateKeys(hospital: any) {
    hospital.ecdh = {
      publicKey: await this.Crypto.ECDH.importPublicKey(hospital.ecdh_public_key),
    }

    hospital.ecdh.secretKey = await this.Crypto.ECDH.computeSecret(this.patient.ecdh.privateKey, hospital.ecdh.publicKey)
  }
}
