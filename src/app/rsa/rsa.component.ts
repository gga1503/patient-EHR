import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-rsa',
  templateUrl: './rsa.component.html',
  styleUrls: ['./rsa.component.scss']
})
export class RsaComponent implements OnInit {

  alice: any = {
    privateKey: '-----BEGIN PRIVATE KEY-----' +
      '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' +
      '-----END PRIVATE KEY-----',
    publicKey: '-----BEGIN PUBLIC KEY-----' +
      'MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAnkc+ns9w9q5DKUcMRn65nB0f8mIPAivNCY4UxSe44PNReH9cpjob9CbZ0rSlbH6d3JM3l0WJWRtOYYKcG/VGgARWBjnuro9hwczxwaJlfBwws01GRB/mm+mQYZuCglV7w+2kjiblS5vG5QX+4K8JlTTIvd6uBthywqqVhSbA1sCXSw/4tvL1XQvN26P7zM3+fxZOIAHuIRNCwba3acFDk7I2Ti54qjsUoy8EZn3k1fOCVRL/ZFcb8OqK8rt7GUYOA7KgLuNLq3O+niFwCsjM9wnBU3gvMVSWGs/waDeADtNKOC8iyydWDdt24Pp2OEaf+5RGy0SeXBByhC3lzYCA9uppu7sboQig6PMUWD2ynz3NIEN25GoqFz6E/Z2EgpTgN1+sxhudHkvCHCPw0KgVdkzz5PQ9rktY6/UNFvmnr9ESs3CImOlJ7kLxyGSuxDpZUorqmDAKBxkvNBUW1e61krP2eClDrprTXRAakr5ultkcNGDGj5Fp2legPZ7Bnu40pq2PA0UKtUW5DyOZCD644ftfnpo/20jWkimd71iW/NwPMhKkEf6w/TFALq88r44z2wUtHf2C7R95OFgBuj/5OnpMAdBPBnl6+havRmtKRff/fueZuT8hQ8x0X6vKycAwByFM+gQlxK6+Tr8tu+KA5Y8SyMxQ/bSbLBYwtITb0isCAwEAAQ==' +
      '-----END PUBLIC KEY-----'
  }

  records: any = [{
    disease: "Covid-19",
    diagnoses: [{
      date: "2022/03/21",
      detail: "Drink Covid-19 drugs 2"
    }, {
      date: "2022/03/15",
      detail: "Drink Covid-19 drugs 1"
    }]
  }, {
    disease: "Heart Attack",
    diagnoses: [{
      date: "2021/04/10",
      detail: "Ring 2 installment"
    }, {
      date: "2021/03/22",
      detail: "Ring 1 installment"
    }]
  }]

  patient: any = {
    publicKey: null,
    privateKey: null,
    secretKey: null,
    disease: "Covid-19",
    diagnose: "Need to drink Covid-19 drugs"
  }

  constructor() {
  }

  async ngOnInit(): Promise<void> {
    this.patient = {
      publicKey: await this.importKey(this.alice.publicKey),
      privateKey: await this.importKey(this.alice.privateKey)
    }

    const diseaseCipher = await this.encryptRSA(this.patient.disease, this.patient.publicKey)

    console.log(this.patient)
    console.log("Disease Cipher:", diseaseCipher)

    const disease = await this.decryptRSA(diseaseCipher, this.patient.privateKey)
    console.log("Disease:", disease)
  }

  b64_to_ab(base64_string: any) {
    return Uint8Array.from(atob(base64_string), c => c.charCodeAt(0));
  }

  async importKey(pem: any) {
    if (pem.includes('PUBLIC')) {
      const key = this.b64_to_ab(pem.replace('-----BEGIN PUBLIC KEY-----', '').replace('-----END PUBLIC KEY-----', ''))

      return await window.crypto.subtle.importKey(
        "spki",
        key,
        {name: "RSA-OAEP", hash: "SHA-256"},
        true,
        ['encrypt']
      );
    }

    const key = this.b64_to_ab(pem.replace('-----BEGIN PRIVATE KEY-----', '').replace('-----END PRIVATE KEY-----', ''))

    return window.crypto.subtle.importKey(
      "pkcs8",
      key,
      {
        name: "RSA-OAEP",
        hash: "SHA-256",
      },
      true,
      ["decrypt"]
    );
  }

  async encryptRSA(data: any, public_key: any) {
    const enc = new TextEncoder()
    const arrayBufferData = enc.encode(data)

    // return CryptoJS.enc.Base64.stringify(cipher)
    return await window.crypto.subtle.encrypt(
      {name: "RSA-OAEP"},
      public_key,
      arrayBufferData
    )
  }

  async decryptRSA(data: any, private_key: any) {
    return await window.crypto.subtle.decrypt(
      {name: "RSA-OAEP"},
      private_key,
      data
    )
  }
}
