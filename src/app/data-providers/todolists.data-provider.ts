import { TodolistService } from '../services/todolist.service';
import { TodoList } from '../interfaces/todolist.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'
})

export class Todolistsdataprovider {

  constructor(private todolistService:TodolistService) { }

  prepareTodoListData(data:string){
      let todo: TodoList = {
        id:1,
        name: data,
        tasks: [],
        ownerId: 1,
        status: true
      }
      return this.todolistService.addTodoList(todo);
  }
}
