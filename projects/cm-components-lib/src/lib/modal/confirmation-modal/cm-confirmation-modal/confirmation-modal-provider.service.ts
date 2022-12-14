import { Injectable } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {filter, Observable} from "rxjs";
import {CmConfirmationModalComponent} from "./cm-confirmation-modal.component";

@Injectable({
  providedIn: 'root'
})
export class ConfirmationModalProviderService {

  constructor(private dialog: MatDialog) {
  }

  public show(msg: string): Observable<boolean> {
    return this.dialog.open(CmConfirmationModalComponent, {
      width: '500px',
      height: '200px',
      data: {
        object: msg
      }
    }).afterClosed()
      .pipe(
        filter(_ => !!_)
      );
  }

}
