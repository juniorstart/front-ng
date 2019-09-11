import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UiLoginComponent } from 'projects/ui-login/src/lib/ui-login.component'
import { AuthGuardService } from './guards/auth-guard.service';
import { RecruitmentInfoComponent } from './recruitment-info/recruitment-info.component';
import { TodolistsComponent } from './todolists/todolists.component';


const routes: Routes = [
  {path: 'login', component: UiLoginComponent},
  {path:'', component:RecruitmentInfoComponent, canActivate:[AuthGuardService]},
  {path:'todo', component:TodolistsComponent, canActivate:[AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
