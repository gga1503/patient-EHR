import {Component, OnInit} from '@angular/core';
import {CryptoService} from '../../shared/services/crypto/crypto.service';
import {Router} from "@angular/router";
import {ApiService} from "../../shared/services/api/api.service";


// import {DisplayText} from "../../shared/components/cards/card-show-qr/card-show-qr.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  placeholder = "Search Disease";
  patient = JSON.parse(<string>localStorage.getItem('patient'));
  diseases: any = [];

  infoCard = {
    title: 'Public Key QR Code',
    des: 'Show Public QR Code to every first visit hospital every first visit hospital',
  };

  qr = {
    bc: this.patient.bc_address
  }

  constructor(
    private Crypto: CryptoService,
    private router: Router,
    private api: ApiService
  ) {
  }

  async ngOnInit(): Promise<void> {
    this.patient.ecdh = {
      privateKey: await this.Crypto.ECDH.importPrivateKey(this.patient.ecdh_private_key)
    }

    this.getDiseases()
  }


  getDiseases(): void {
    const observable = {
      next: async (response: any) => await this.decrypt(response),
      error: (err: Error) => console.error(err),
      complete: async () => subscription.unsubscribe()
    }

    const subscription = this.api.get(`patients/${this.patient.bc_address}/diseases`).subscribe(observable)
  }

  async decrypt(groups: any) {
    for (const group of groups) {
      await this.generateKeys(group.hospital)

      for (const disease of group.diseases) {
        const disease_name = this.Crypto.AES.decrypt(
          disease.name,
          group.hospital.ecdh.secretKey,
          this.patient.iv
        )

        this.group_decrypted(
          disease_name,
          group.hospital,
          disease
        )
      }
    }

    sessionStorage.setItem('diseases', JSON.stringify(this.diseases))
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

    cipher.hospital = hospital

    if (index == -1) {
      const group = {
        name: disease_name,
        ciphers: [cipher]
      }

      this.diseases.push(group)
    } else {
      this.diseases[index].ciphers.push(cipher)
    }
  }

  async generateKeys(hospital: any) {
    hospital.ecdh = {
      publicKey: await this.Crypto.ECDH.importPublicKey(hospital.ecdh_public_key),
    }

    hospital.ecdh.secretKey = await this.Crypto.ECDH.computeSecret(this.patient.ecdh.privateKey, hospital.ecdh.publicKey)
  }
}
