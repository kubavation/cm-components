import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ConfirmationDialogData} from "../model/confirmation-dialog-data";

@Component({
  selector: 'lib-cm-confirmation-modal',
  templateUrl: './cm-confirmation-modal.component.html',
  styleUrls: ['./cm-confirmation-modal.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CmConfirmationModalComponent {

  _msg = '';

  //_customMessage: string; TODO

  constructor(private dialogRef: MatDialogRef<CmConfirmationModalComponent>,
              @Inject(MAT_DIALOG_DATA) dialogData: ConfirmationDialogData) {

    if (dialogData) {
      this._msg = dialogData.object;
    }
  }

  cancel(): void {
    this.dialogRef.close(false);
  }

  save(): void {
    this.dialogRef.close(true);
  }
}
