import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmButtonComponent } from './cm-button/cm-button.component';
import { MatButtonModule } from "@angular/material/button";



@NgModule({
  declarations: [
    CmButtonComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    CmButtonComponent
  ]
})
export class CmButtonModule { }
