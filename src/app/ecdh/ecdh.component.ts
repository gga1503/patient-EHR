import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ecdh',
  templateUrl: './ecdh.component.html',
  styleUrls: ['./ecdh.component.scss']
})
export class EcdhComponent implements OnInit {

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


  patient: any = { publicKey: null, privateKey: null, secretKey: null };
  doctor: any = { publicKey: null, privateKey: null, secretKey: null };
  myAngularxQrCode: any;
  myAngularxQrCodeA: string;

  constructor() {
    this.myAngularxQrCodeA = 'Blabla';
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

    // console.log(this.myAngularxQrCode)

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
        { name: "ECDH", namedCurve: "P-256" },
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
        namedCurve: "P-256",
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
      256
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
