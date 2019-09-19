import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { MaterialModule } from 'projects/material/src/public-api';

@NgModule({
  declarations: [LoginComponent],
  entryComponents:[LoginComponent],
  imports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[LoginComponent]
})
export class LoginModule { }
