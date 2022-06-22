import {Component, Input, OnInit} from '@angular/core';
import {QrCodeComponent} from "../../qr-code/qr-code.component";
import {MatBottomSheet} from "@angular/material/bottom-sheet";

@Component({
  selector: 'app-card-show-qr',
  templateUrl: './card-show-qr.component.html',
  styleUrls: ['./card-show-qr.component.scss']
})

export class CardShowQrComponent implements OnInit {
  @Input() card: any;
  @Input() qrData: any;
  @Input() title: any;
  @Input() description: any;

  // @Input() infoCard: DisplayText | undefined;


  constructor(private _bottomSheet: MatBottomSheet) {
  }

  ngOnInit(): void {
    console.log(this.qrData)
  }


  showQrBottomModal() {
    this._bottomSheet.open(QrCodeComponent, {data: JSON.stringify(this.qrData)});
  }

}
