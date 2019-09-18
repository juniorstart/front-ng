import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register.component';
import { MaterialModule } from 'projects/material/src/public-api';



@NgModule({
  declarations: [RegisterComponent],
  entryComponents:[RegisterComponent],
  imports: [
    MaterialModule,
    FormsModule
  ],
  exports:[RegisterComponent]
})
export class RegisterModule { }
