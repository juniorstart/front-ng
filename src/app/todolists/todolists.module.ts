import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodolistsRoutingModule } from './todolists-routing.module';
import { TodolistsComponent } from './todolists.component';
import { TodolistListComponent } from './todolist-list/todolist-list.component';
import { TodolistFormComponent } from './todolist-form/todolist-form.component';
import { MaterialModule } from 'projects/material/src/public-api';
import { FormsModule } from '@angular/forms';
import { SingleTaskComponent } from './single-task/single-task.component';


@NgModule({
  declarations: [TodolistsComponent, TodolistListComponent, TodolistFormComponent, SingleTaskComponent],
  imports: [
    CommonModule,
    TodolistsRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class TodolistsModule { }
