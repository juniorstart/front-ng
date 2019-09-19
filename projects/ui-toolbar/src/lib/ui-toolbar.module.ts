import { NgModule } from '@angular/core';
import { UiToolbarComponent } from './ui-toolbar.component';
import { MaterialModule } from 'projects/material/src/public-api';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [UiToolbarComponent],
  imports: [
    MaterialModule,
    CommonModule
  ],
  exports: [UiToolbarComponent]
})
export class UiToolbarModule { }
