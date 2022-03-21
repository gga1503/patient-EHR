import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  bob = {
    privateKey: '-----BEGIN PRIVATE KEY-----' +
      'MIGHAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBG0wawIBAQQg+G9xJywi68JTEXvPw9UkQ3TyEgFxiiGe19/sppCTE8mhRANCAAReEEr0N/vsRz24bnrg4XuhzItNcdSP44dVvfB/6RufYlGw9I/5oxNM4Fn88IzOF47jeBirgBxJyCpwcz8CT4k+' +
      '-----END PRIVATE KEY-----',
    publicKey: '-----BEGIN PUBLIC KEY-----' +
      'MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEXhBK9Df77Ec9uG564OF7ocyLTXHUj+OHVb3wf+kbn2JRsPSP+aMTTOBZ/PCMzheO43gYq4AcScgqcHM/Ak+JPg==' +
      '-----END PUBLIC KEY-----'
  }

  constructor() {


  }

  async importKey(pem: any) {
    if (pem.includes('PUBLIC')) {
      const key = this.b64_to_ab(pem.replace('-----BEGIN PUBLIC KEY-----', '').replace('-----END PUBLIC KEY-----', ''))

      return await window.crypto.subtle.importKey(
        "spki",
        key,
        {name: "ECDH", namedCurve: "P-256"},
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


  b64_to_ab(base64_string: any) {
    return Uint8Array.from(atob(base64_string), c => c.charCodeAt(0));
  }
}
