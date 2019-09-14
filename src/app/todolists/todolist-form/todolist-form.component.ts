import { Component, Input } from '@angular/core';
import { TodoListInterface } from 'src/app/interfaces/todolistInterface';

@Component({
  selector: 'app-todolist-form',
  templateUrl: './todolist-form.component.html',
  styleUrls: ['./todolist-form.component.scss']
})
export class TodolistFormComponent {
  @Input() todoLists: TodoListInterface[];
}
