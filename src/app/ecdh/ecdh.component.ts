import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ecdh',
  templateUrl: './ecdh.component.html',
  styleUrls: ['./ecdh.component.scss']
})
export class EcdhComponent implements OnInit {

  alice = {
    privateKey: '-----BEGIN PRIVATE KEY-----' +
      'MIG2AgEAMBAGByqGSM49AgEGBSuBBAAiBIGeMIGbAgEBBDDz2+Ebn5Q4OV53xe6G+PBAxOywXAOdgNfo9DaBzsuDECjK2SzP0RMxx3IH65+dviyhZANiAAQs8QFwlPTSInB/4wD4svsKDqW19B5Jl/R/ZHU3e2gzpZ2xdH2cbP9adHIZxMi4Vfb4KBDu8KMM2LqsxPyhtEri64iJev+hwOEp0NlTAOITePv/DBnQhguREAyH/i23cC4=' +
      '-----END PRIVATE KEY-----',
    publicKey: '-----BEGIN PUBLIC KEY-----' +
      'MHYwEAYHKoZIzj0CAQYFK4EEACIDYgAELPEBcJT00iJwf+MA+LL7Cg6ltfQeSZf0f2R1N3toM6WdsXR9nGz/WnRyGcTIuFX2+CgQ7vCjDNi6rMT8obRK4uuIiXr/ocDhKdDZUwDiE3j7/wwZ0IYLkRAMh/4tt3Au' +
      '-----END PUBLIC KEY-----'
  }

  bob = {
    privateKey: '-----BEGIN PRIVATE KEY-----' +
      'MIG2AgEAMBAGByqGSM49AgEGBSuBBAAiBIGeMIGbAgEBBDBwiloXtpfJ0MVQH09jzFqgH0ddKmbeKF9m5Wn9sCOb5jS4z2Wv2KmuyV7edi5HuSShZANiAAQCaS0a2BQDJV0FXFA28k+qIxaMpuilMChvPhY8tiloWbSI1A3Yzt5lfaDdg8ZneyV1G2wVL7y0uW1BtPzxzDT6WHaxkdf9UTWYJV18gSLa+GDA+jbBDTodJ43DA37C2qM=' +
      '-----END PRIVATE KEY-----',
    publicKey: '-----BEGIN PUBLIC KEY-----' +
      'MHYwEAYHKoZIzj0CAQYFK4EEACIDYgAEAmktGtgUAyVdBVxQNvJPqiMWjKbopTAobz4WPLYpaFm0iNQN2M7eZX2g3YPGZ3sldRtsFS+8tLltQbT88cw0+lh2sZHX/VE1mCVdfIEi2vhgwPo2wQ06HSeNwwN+wtqj' +
      '-----END PUBLIC KEY-----'
  }

  patient: any = null;
  doctor: any = null;
  myAngularxQrCode: any;

  constructor() {
  }

  async ngOnInit(): Promise<void> {
    this.patient = {
      publicKey: await this.importKey(this.alice.publicKey),
      privateKey: await this.importKey(this.alice.privateKey)
    }

    this.doctor = {
      publicKey: await this.importKey(this.bob.publicKey),
      privateKey: await this.importKey(this.bob.privateKey)
    }

    this.patient.secretKey = await this.generateSecretKey(this.patient.privateKey, this.doctor.publicKey)
    this.doctor.secretKey = await this.generateSecretKey(this.doctor.privateKey, this.patient.publicKey)

    this.myAngularxQrCode = this.patient.secretKey

    console.log('Patient:', this.patient)
    console.log('Doctor:', this.doctor)
    // console.log(typeof (this.patient.secretKey));
  }

  str2ab(str: any) {
    const buf = new ArrayBuffer(str.length);
    const bufView = new Uint8Array(buf);
    for (let i = 0, strLen = str.length; i < strLen; i++) {
      bufView[i] = str.charCodeAt(i);
    }
    return buf;
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
        { name: "ECDH", namedCurve: "P-384" },
        true,
        []
      );
    }

    const key = this.b64_to_ab(pem.replace('-----BEGIN PRIVATE KEY-----', '').replace('-----END PRIVATE KEY-----', ''))

    return window.crypto.subtle.importKey(
      "pkcs8",
      key,
      {
        name: "ECDH",
        namedCurve: "P-384",
      },
      true,
      ["deriveKey", "deriveBits"]
    );
  }

  async generateSecretKey(privateKey: any, publicKey: any) {
    const sharedSecret = await window.crypto.subtle.deriveBits(
      {
        name: "ECDH",
        public: publicKey
      },
      privateKey,
      384
    )
    return this.arrayBufferToBase64(sharedSecret);
  }

  arrayBufferToBase64(buffer: any) {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  }

}
