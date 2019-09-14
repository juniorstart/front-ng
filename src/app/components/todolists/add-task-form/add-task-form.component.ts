import { Component, Input, Output,EventEmitter, OnInit } from '@angular/core';
import { TodoListInterface } from 'src/app/interfaces/todolistInterface';
import { FormControl,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.scss']
})

export class AddTaskFormComponent {
  @Input() todoLists: TodoListInterface[];
  @Output() saved = new EventEmitter();
  
  profileForm = new FormGroup({
    description: new FormControl(''),
    todolistId: new FormControl('')
  });
}
