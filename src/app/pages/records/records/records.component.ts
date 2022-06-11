import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../../shared/services/api/api.service";
import {CryptoService} from "../../../shared/services/crypto/crypto.service";
import {Location} from '@angular/common';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss']
})
export class RecordsComponent implements OnInit {
  // diseases = JSON.parse(<string>sessionStorage.getItem('diseases'))
  disease = JSON.parse(<string>sessionStorage.getItem('disease'))
  records: any = []

  constructor(private location: Location, private api: ApiService, private Crypto: CryptoService) {

  }

  async ngOnInit(): Promise<void> {
    await this.getRecords();
  }

  previousPage() {
    this.location.back();
  }

  async getRecords() {
    const params: any = {'diseases': []}

    this.disease.ciphers.forEach((cipher: any) => {
      params.diseases.push(cipher._id);
    })

    const observable = {
      next: (response: any) => {
        this.records = response
        console.log('response', response)
        this.records.forEach((record: any) => {
          this.getHospital(record)
        })

        console.log(this.records)
      },
      error: (err: Error) => console.error(err),
      complete: async () => subscription.unsubscribe()
    }

    const subscription = this.api.get(`records`, params)
      .subscribe(observable)
  }

  getHospital(record: any) {
    this.disease.ciphers.forEach((cipher: any) => {
      if (cipher._id == record.disease_id) {
        record.hospital = {
          name: cipher.hospital.name,
          secretKey: cipher.hospital.ecdh.secretKey
        }
      }
    })
  }

  // async generateKeys() {
  //   this.hospital.ecdh = {
  //     publicKey: await this.Crypto.ECDH.importPublicKey(this.hospital.ecdh_public_key),
  //   }
  //   this.patient.ecdh = {
  //     privateKey: await this.Crypto.ECDH.importPrivateKey(this.patient.ecdh_private_key)
  //   }
  //
  //   this.secretKey = await this.Crypto.ECDH.computeSecret(this.patient.ecdh.privateKey, this.hospital.ecdh.publicKey)
  // }

  // async decrypt() {
  //   for (let j = 0; j < this.records.length; j++) {
  //     await this.generateKeys()
  //
  //     const record = this.Crypto.AES.decrypt(
  //       this.records[j],
  //       this.secretKey,
  //       this.patient.iv
  //     )
  //   }
  //   sessionStorage.setItem('records', JSON.stringify(this.records))
  // }

}
