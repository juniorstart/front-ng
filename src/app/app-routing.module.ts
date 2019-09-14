import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UiLoginComponent } from 'projects/ui-login/src/lib/ui-login.component'
import { AuthGuardService } from './guards/auth-guard.service';
import { RecruitmentInfoComponent } from './components/recruitment-info/recruitment-info.component';
import { TodolistsComponent } from './components/todolists/todolists.component';


const routes: Routes = [
  {path: 'login', component: UiLoginComponent,data: { animation: 'home' }},
  {path:'', component:RecruitmentInfoComponent, canActivate:[AuthGuardService],data: { animation: 'recruitmentInfo' }},
  {path:'todo', component:TodolistsComponent, canActivate:[AuthGuardService],data: { animation: 'todo' }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
