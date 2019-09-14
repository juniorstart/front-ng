import { Component, Input } from '@angular/core';
import { TodoListInterface } from 'src/app/interfaces/todolistInterface';

@Component({
  selector: 'app-todolist-list',
  templateUrl: './todolist-list.component.html',
  styleUrls: ['./todolist-list.component.scss']
})
export class TodolistListComponent  {
  @Input() todoLists: TodoListInterface[];

}
