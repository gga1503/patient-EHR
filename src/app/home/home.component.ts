import { Component, OnInit } from '@angular/core';
import {CryptoService} from '../services/crypto/crypto.service';
import {SearchBarComponent} from "../search-bar/search-bar.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  placeHolders = "Search Disease";

  alice = {
    privateKey: '-----BEGIN PRIVATE KEY-----' +
      'MIGHAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBG0wawIBAQQgUbuXQG2YFrZtJtucV5L5wA4dbGEuU30mruYn3Wsyf2yhRANCAAS6aar/PnqCyy99owNITXdF7Jdvhpj+z6ltRh93M1xhPDs9wj0Wp7QQCYjU1sFkh7eLhEjksnV+P9NLIDoGn67q' +
      '-----END PRIVATE KEY-----',
    publicKey: '-----BEGIN PUBLIC KEY-----' +
      'MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEummq/z56gssvfaMDSE13ReyXb4aY/s+pbUYfdzNcYTw7PcI9Fqe0EAmI1NbBZIe3i4RI5LJ1fj/TSyA6Bp+u6g==' +
      '-----END PUBLIC KEY-----'
  }

  bob = {
    privateKey: '-----BEGIN PRIVATE KEY-----' +
      'MIGHAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBG0wawIBAQQg+G9xJywi68JTEXvPw9UkQ3TyEgFxiiGe19/sppCTE8mhRANCAAReEEr0N/vsRz24bnrg4XuhzItNcdSP44dVvfB/6RufYlGw9I/5oxNM4Fn88IzOF47jeBirgBxJyCpwcz8CT4k+' +
      '-----END PRIVATE KEY-----',
    publicKey: '-----BEGIN PUBLIC KEY-----' +
      'MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEXhBK9Df77Ec9uG564OF7ocyLTXHUj+OHVb3wf+kbn2JRsPSP+aMTTOBZ/PCMzheO43gYq4AcScgqcHM/Ak+JPg==' +
      '-----END PUBLIC KEY-----'
  }

  // Keys from crypto node.js (curve type: prime256v1, the equal of NIST P-256)
  charlie = {
    privateKey: '-----BEGIN PRIVATE KEY-----' +
      'BMcW0gD+1pV6INEIzNUULMMAvLUiMDEi2iay3+SGKNEjf/2/+OdbjMRN38I0rZqUbyNd2CJNr2/y4R2TsEsLE2M=' +
      '-----END PRIVATE KEY-----',
    publicKey: '-----BEGIN PUBLIC KEY-----' +
      '/YktVnv6JFN6P/Tf0Gzre4gRpDUjzsHAkr+741d8Xk8=' +
      '-----END PUBLIC KEY-----'
  }

  david = {
    privateKey: '-----BEGIN PRIVATE KEY-----' +
      'BEFVvsjHI0FrOb3ZIlMnxxgCRHrZXmjyN08EANjxUiP6qrFVacco0XYT/KeGVO8sGS3ap3bAiyDrOUr6nNN8Asg=' +
      '-----END PRIVATE KEY-----',
    publicKey: '-----BEGIN PUBLIC KEY-----' +
      'J/1APBlv0skl/rFOaxix10SaMAxCCpCnF070OQ980v4=' +
      '-----END PUBLIC KEY-----'
  }


  patient: any = {
    publicKey: null,
    privateKey: null,
    secretKey: null,
    disease: "Covid-19",
    diagnose: "Need to drink Covid-19 drugs"
  };

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

  doctor: any = {publicKey: null, privateKey: null, secretKey: null};
  myAngularxQrCode: any;
  myAngularxQrCodeA: string;

  constructor(private Crypto: CryptoService) {
    this.myAngularxQrCodeA = 'Blabla';
  }

  async ngOnInit(): Promise<void> {
    // Ini aku cuma testing operasi ECDH key exchange & encryption. nanti ini diapus kalo udah ga kepake
    console.log(await this.Crypto.ECDH.generateKeys())
    this.patient.publicKey = await this.Crypto.ECDH.importPublicKey(this.alice.publicKey, "P-256")
    this.patient.privateKey = await this.Crypto.ECDH.importPrivateKey(this.alice.privateKey, "P-256")

    this.doctor.publicKey = await this.Crypto.ECDH.importPublicKey(this.bob.publicKey, "P-256")
    this.doctor.privateKey = await this.Crypto.ECDH.importPrivateKey(this.bob.privateKey, "P-256")

    this.patient.secretKey = await this.Crypto.ECDH.computeSecret(this.patient.privateKey, this.doctor.publicKey)
    this.doctor.secretKey = await this.Crypto.ECDH.computeSecret(this.doctor.privateKey, this.patient.publicKey)

    console.log('Patient:', this.patient)
    console.log('Doctor:', this.doctor)

    this.myAngularxQrCode = this.patient.secretKey

    // Encryption with AES
    const cipher = this.Crypto.AES.encrypt(this.records[0].disease, this.patient.secretKey)
    const decipher = this.Crypto.AES.decrypt(cipher, this.patient.secretKey)

    console.log("Data:", this.records[0].disease)
    console.log("Cipher:", cipher.toString())
    console.log("Decipher:", decipher)
  }
}
