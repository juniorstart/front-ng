import { Component, Input } from '@angular/core';
import { TodoListInterface } from 'src/app/interfaces/todolistInterface';

@Component({
  selector: 'app-add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.scss']
})
export class AddTaskFormComponent {
  @Input() todoLists: TodoListInterface[];
}
