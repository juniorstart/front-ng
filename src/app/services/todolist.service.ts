import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodoListInterface } from '../interfaces/todolistInterface';
import { AddTaskInterface } from '../interfaces/addTaskInterface';
import { TaskInterface } from '../interfaces/taskInterface';
import { Observable } from 'rxjs';

const BASE_URL = 'http://localhost:5001/api/todolists/';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {

  constructor(private httpClient: HttpClient) { }

  getUrl(td:boolean,withId:boolean,id?:Number):string{
    return `${BASE_URL}${td?'todolist':'task'}/${withId? `${id}` : ''}`;
  }
  getall():Observable<TodoListInterface[]>{
    return this.httpClient.get<TodoListInterface[]>(BASE_URL);
  }
  deleteTask(id:Number):void{
    this.httpClient.delete(this.getUrl(false,true,id));
  }
  deleteTodoList(id:Number):void{
    this.httpClient.delete(this.getUrl(true,true,id));
  }
  addTodoList(item:TodoListInterface):Observable<TodoListInterface>{
    return this.httpClient.post<TodoListInterface>(this.getUrl(true,false),item);
  }
  addTask(item:AddTaskInterface):Observable<TaskInterface>{
    return this.httpClient.post<TaskInterface>(this.getUrl(false,false),item);
  }
  updateTask(item:TaskInterface):Observable<TaskInterface>{
    return this.httpClient.put<TaskInterface>(`${BASE_URL}${item.id}`,item);
  }
}
