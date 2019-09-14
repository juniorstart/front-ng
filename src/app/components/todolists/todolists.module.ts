import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodolistsRoutingModule } from './todolists-routing.module';
import { TodolistsComponent } from './todolists.component';
import { TodolistListComponent } from './todolist-list/todolist-list.component';
import { MaterialModule } from 'projects/material/src/public-api';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SingleTaskComponent } from './single-task/single-task.component';
import { AddTodoListFormComponent } from './add-todo-list-form/add-todo-list-form.component';
import { AddTaskFormComponent } from './add-task-form/add-task-form.component';


@NgModule({
  declarations: [TodolistsComponent, TodolistListComponent, SingleTaskComponent, AddTodoListFormComponent, AddTaskFormComponent],
  imports: [
    CommonModule,
    TodolistsRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TodolistsModule { }
