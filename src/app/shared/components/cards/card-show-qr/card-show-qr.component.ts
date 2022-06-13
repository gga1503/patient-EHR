import {Component, Input, OnInit} from '@angular/core';
import {QrCodeComponent} from "../../qr-code/qr-code.component";
import {MatBottomSheet} from "@angular/material/bottom-sheet";

@Component({
  selector: 'app-card-show-qr',
  templateUrl: './card-show-qr.component.html',
  styleUrls: ['./card-show-qr.component.scss']
})

export class CardShowQrComponent implements OnInit {

  @Input() infoCard: any;
  @Input() qrData: any;
  @Input() title: any;
  @Input() description: any;

  // @Input() infoCard: DisplayText | undefined;

  constructor(private _bottomSheet: MatBottomSheet) {
  }

  showQrBottomModal() {
    this._bottomSheet.open(QrCodeComponent, {data: JSON.stringify(this.qrData)});
  }


  // showQrBottomModal() {
  //   this.matBottomSheet.open(QRCodeComponent, {
  //     data: "template for bottom sheet"
  //   });
  // }

  ngOnInit(): void {
  }

}
