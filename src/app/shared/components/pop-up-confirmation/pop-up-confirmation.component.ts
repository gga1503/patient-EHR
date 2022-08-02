import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {PopUpData} from "../../../interfaces/pop-up-data";

@Component({
  selector: 'app-pop-up-confirmation',
  templateUrl: './pop-up-confirmation.component.html',
  styleUrls: ['./pop-up-confirmation.component.scss']
})
export class PopUpConfirmationComponent implements OnInit {

  constructor(
    private router: Router,
    private popUpRef: MatDialogRef<PopUpConfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PopUpData
  ) {
  }

  ngOnInit(): void {
  }

  onCloseClick(): void {
    this.popUpRef.close();
  }
  
  onMovePageClick(): void {
    this.popUpRef.close('closed');

    this.popUpRef.afterClosed().subscribe(async (result) => {
      if (result === 'closed') {
        await this.router.navigate(['']);
      }
    });
  }


}
