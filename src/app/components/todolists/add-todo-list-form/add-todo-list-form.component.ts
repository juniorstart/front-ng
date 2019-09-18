import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-todo-list-form',
  templateUrl: './add-todo-list-form.component.html',
  styleUrls: ['./add-todo-list-form.component.scss']
})
export class AddTodoListFormComponent implements OnInit{
  @Output() addedTodo = new EventEmitter();
  addTodoList:FormGroup;
  
  ngOnInit(){
     this.addTodoList = new FormGroup({
      name: new FormControl(''),
    });
  }
}
