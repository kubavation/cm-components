import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmConfirmationModalComponent } from './confirmation-modal/cm-confirmation-modal/cm-confirmation-modal.component';
import {SharedModule} from "../shared/shared.module";
import {
  ConfirmationModalProviderService
} from "./confirmation-modal/cm-confirmation-modal/confirmation-modal-provider.service";




@NgModule({
  declarations: [
    CmConfirmationModalComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [
    ConfirmationModalProviderService
  ]
})
export class ModalModule { }
