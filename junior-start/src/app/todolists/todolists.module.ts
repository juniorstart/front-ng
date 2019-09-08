import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodolistsRoutingModule } from './todolists-routing.module';
import { TodolistsComponent } from './todolists.component';


@NgModule({
  declarations: [TodolistsComponent],
  imports: [
    CommonModule,
    TodolistsRoutingModule
  ]
})
export class TodolistsModule { }
