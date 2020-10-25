import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './guards/auth-guard.service';
import { RecruitmentInfoComponent } from './components/recruitment-info/recruitment-info.component';
import { TodolistsComponent } from './components/todolists/todolists.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {ChatComponent} from './components/chat/chat.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent, data: { animation: 'home' }},
  {path: 'register', component: RegisterComponent, data: { animation: 'home' }},
  {path: '', component: RecruitmentInfoComponent, canActivate:[AuthGuardService], data: { animation: 'recruitmentInfo' }},
  {path: 'todo', component: TodolistsComponent, canActivate:[AuthGuardService], data: { animation: 'todo' }},
  {path: 'chat', component: ChatComponent, canActivate: [AuthGuardService], data: { animation: 'todo' }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
