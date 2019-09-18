import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { MaterialModule } from 'projects/material/src/public-api';

@NgModule({
  declarations: [LoginComponent],
  entryComponents:[LoginComponent],
  imports: [
    MaterialModule,
    FormsModule
  ],
  exports:[LoginComponent]
})
export class LoginModule { }
