import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UiLoginComponent } from './ui-login.component';


const routes: Routes = [
  { path: 'login', component: UiLoginComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiLoginRoutingModule { }
