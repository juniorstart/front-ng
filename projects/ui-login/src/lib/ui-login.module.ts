import { NgModule } from '@angular/core';
import { UiLoginComponent } from './ui-login.component';
import { UiLoginRoutingModule } from './ui-login-routing.module';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'projects/material/src/public-api';
import { Route, RouterModule } from '@angular/router';

export const uiLoginRoutes: Route[] = [
  { path: 'login', component: UiLoginComponent }
];

@NgModule({
  declarations: [UiLoginComponent],
  entryComponents:[UiLoginComponent],
  imports: [
    UiLoginRoutingModule,
    MaterialModule,
    FormsModule,
    RouterModule
  ],
  exports: [UiLoginComponent]
})



export class UiLoginModule { }
