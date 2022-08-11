import {Injectable} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {Observable} from "rxjs";
import {PopUpData} from "../../../interfaces/pop-up-data";
import {PopUpConfirmationComponent} from "../../components/pop-up-confirmation/pop-up-confirmation.component";

@Injectable({
  providedIn: 'root'
})
export class ConfirmationService {

  constructor(private dialog: MatDialog) {
  }

  public confirmationPopUp(data: PopUpData): Observable<boolean> {
    return this.dialog
      .open(PopUpConfirmationComponent, {
        data,
        panelClass: 'custom-popup-background',
        disableClose: true,
      })
      .afterClosed();
  }
}
