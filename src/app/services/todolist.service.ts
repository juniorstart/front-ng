import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodoListInterface } from '../interfaces/todolistInterface';
import { AddTaskInterface } from '../interfaces/addTaskInterface';
import { TaskInterface } from '../interfaces/taskInterface';

const BASE_URL = 'http://localhost:5001/api/todolists/';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {

  constructor(private httpClient: HttpClient) { }

  getUrl(td:boolean,withId:boolean,id?:Number){
    return `${BASE_URL}${td?'todolist':'task'}/${withId? `${id}` : ''}`;
  }
  getall(){
    return this.httpClient.get(BASE_URL);
  }
  deleteTask(id:Number){
    return this.httpClient.delete(this.getUrl(false,true,id));
  }
  deleteTodoList(id:Number){
    return this.httpClient.delete(this.getUrl(true,true,id));
  }
  addTodoList(item:TodoListInterface){
    return this.httpClient.post(this.getUrl(true,false),item);
  }
  addTask(item:AddTaskInterface){
    return this.httpClient.post(this.getUrl(false,false),item);
  }
  updateTask(item:TaskInterface){
    return this.httpClient.put(`${BASE_URL}${item.id}`,item);
  }
}
