import { Component, Input, Output,EventEmitter, OnInit } from '@angular/core';
import { FormControl,FormGroup} from '@angular/forms';
import { TodoList } from 'src/app/interfaces/todolist.interface';

@Component({
  selector: 'app-add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.scss']
})

export class AddTaskFormComponent implements OnInit{
  @Input() todoLists: TodoList[];
  @Output() saved = new EventEmitter();
  profileForm:FormGroup;

  ngOnInit(){
    this.profileForm = new FormGroup({
      description: new FormControl(''),
      todolistId: new FormControl('')
    });
  }
  save(){
    this.saved.emit(this.profileForm.value);
  }
}
