import { NgModule } from '@angular/core';
import { CmComponentsLibComponent } from './cm-components-lib.component';
import {ModalModule} from "./modal/modal.module";



@NgModule({
  declarations: [
    CmComponentsLibComponent
  ],
  imports: [
   ModalModule
  ],
  exports: [
    CmComponentsLibComponent
  ]
})
export class CmComponentsLibModule { }
