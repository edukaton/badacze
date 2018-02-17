import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatRadioModule,
  MatToolbarModule,
  MatIconModule
} from '@angular/material';

import {
  MatInputModule
} from '@angular/material/input';


@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule
  ],
})
export class AngularMaterialModule {}
