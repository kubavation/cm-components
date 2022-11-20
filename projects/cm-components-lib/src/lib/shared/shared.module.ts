import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogModule} from "@angular/material/dialog";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class SharedModule { }
