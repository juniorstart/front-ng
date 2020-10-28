import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { MaterialModule } from 'projects/material/src/public-api';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [LoginComponent],
  entryComponents:[LoginComponent],
  imports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports:[LoginComponent]
})
export class LoginModule { }
