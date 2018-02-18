import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatRadioModule,
  MatToolbarModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatChipsModule,
  MatGridListModule,
  MatTabsModule,
  MatSliderModule,
  MatSelectModule
} from '@angular/material';


@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatChipsModule,
    MatGridListModule,
    MatTabsModule,
    MatSliderModule,
    MatSelectModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatChipsModule,
    MatGridListModule,
    MatTabsModule,
    MatSliderModule,
    MatSelectModule
  ],
})
export class AngularMaterialModule {}
