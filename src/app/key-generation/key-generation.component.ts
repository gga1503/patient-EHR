import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-key-generation',
  templateUrl: './key-generation.component.html',
  styleUrls: ['./key-generation.component.scss']
})
export class KeyGenerationComponent implements OnInit {

  constructor() { }

  async ngOnInit(): Promise<void> {
    const keyPair = await this.RsaKeyGeneration()
    // const keyPair = await this.EcdhKeyGeneration()

    console.log(await this.exportPublicKey(keyPair.publicKey))
    console.log(await this.exportPrivateKey(keyPair.privateKey))
  }

  async EcdhKeyGeneration() {
    return await window.crypto.subtle.generateKey(
      {
        name: "ECDH",
        namedCurve: "P-256"
      },
      true,
      ["deriveKey", "deriveBits"]
    )
  }

  async RsaKeyGeneration(){
    return await window.crypto.subtle.generateKey(
      {
        name: "RSA-OAEP",
        modulusLength: 4096,
        publicExponent: new Uint8Array([1, 0, 1]),
        hash: "SHA-256"
      },
      true,
      ["encrypt", "decrypt"]
    );
  }

  async exportPublicKey(key: any) {
    const exported = await window.crypto.subtle.exportKey(
      "spki",
      key
    )
    const base64Key = this.arrayBufferToBase64(exported)
    return `-----BEGIN PUBLIC KEY-----${base64Key}-----END PUBLIC KEY-----`
  }

  async exportPrivateKey(key: any) {
    const exported = await window.crypto.subtle.exportKey(
      "pkcs8",
      key
    )
    const base64Key = this.arrayBufferToBase64(exported)
    return `-----BEGIN PRIVATE KEY-----${base64Key}-----END PRIVATE KEY-----`;
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
