import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'lib-cm-confirmation-modal',
  templateUrl: './cm-confirmation-modal.component.html',
  styleUrls: ['./cm-confirmation-modal.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CmConfirmationModalComponent {

  private _msg = '';

  constructor(private dialogRef: MatDialogRef<CmConfirmationModalComponent>) { }

  cancel() {

  }

  save() {

  }
}
