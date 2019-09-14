import { Component, OnInit } from '@angular/core';
import { TodoListInterface } from '../interfaces/todolistInterface';
import { TaskInterface } from '../interfaces/taskInterface';
import { TodolistService } from '../services/todolist.service';

@Component({
  selector: 'app-todolists',
  templateUrl: './todolists.component.html',
  styleUrls: ['./todolists.component.scss']
})
export class TodolistsComponent implements OnInit {

  selectedTodoList: TodoListInterface;
  todolists$;
  constructor(private todolistService:TodolistService) { }

  ngOnInit() {
    this.getTodoLists();
    this.resetForm();
  }

  getTodoLists(){
      this.todolists$ = this.todolistService.getall();
  }

  resetForm(){
    const emptyList: TodoListInterface = {
      id: null,
      name: '',
      tasks: [],
      ownerId: null,
      status: false 
    }
    this.selectedList(emptyList);
  }

  selectedList(list:TodoListInterface){
    this.selectedTodoList = list;
  }

  cancel() {
    this.resetForm();
  }
}
