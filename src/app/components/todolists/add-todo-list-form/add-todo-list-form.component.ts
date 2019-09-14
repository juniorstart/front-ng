import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-todo-list-form',
  templateUrl: './add-todo-list-form.component.html',
  styleUrls: ['./add-todo-list-form.component.scss']
})
export class AddTodoListFormComponent {
  @Output() addedTodo = new EventEmitter();

  addTodoList = new FormGroup({
    name: new FormControl(''),
  });
}
