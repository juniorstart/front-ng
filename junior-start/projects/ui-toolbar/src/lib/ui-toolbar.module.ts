import { NgModule } from '@angular/core';
import { UiToolbarComponent } from './ui-toolbar.component';
import { MaterialModule } from 'projects/material/src/public-api';

@NgModule({
  declarations: [UiToolbarComponent],
  imports: [
    MaterialModule
  ],
  exports: [UiToolbarComponent]
})
export class UiToolbarModule { }
