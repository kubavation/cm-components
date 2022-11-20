import {inject, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmConfirmationModalComponent } from './confirmation-modal/cm-confirmation-modal/cm-confirmation-modal.component';
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [
    CmConfirmationModalComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CmModalModule { }
