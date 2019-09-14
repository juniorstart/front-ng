import { Injectable } from '@angular/core';
import { TodolistService } from '../services/todolist.service';
import { TodoListInterface } from '../interfaces/todolistInterface';

@Injectable({
  providedIn: 'root'
})
export class TodolistsdataproviderService {

  constructor(private todolistService:TodolistService) { }

  prepareTodoListData(data:string){
      let todo: TodoListInterface = {
        id:1,
        name: data,
        tasks: [],
        ownerId: 1,
        status: true
      }
      console.log(todo);
      return this.todolistService.addTodoList(todo);
  }
}
