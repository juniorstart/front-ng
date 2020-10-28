import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register.component';
import { MaterialModule } from 'projects/material/src/public-api';
import {CommonModule} from '@angular/common';



@NgModule({
  declarations: [RegisterComponent],
  entryComponents:[RegisterComponent],
  imports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports:[RegisterComponent]
})
export class RegisterModule { }
