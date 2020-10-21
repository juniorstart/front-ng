import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AddTask } from '../interfaces/addTask.interface';
import { Task } from '../interfaces/task.interface';
import { Observable } from 'rxjs';
import { TodoList } from '../interfaces/todolist.interface';
import {environment} from '../../environments/environment';

const BASE_URL = `${environment.apiUrl}/api/todolists/`;

@Injectable({
  providedIn: 'root'
})
export class TodolistService {

  constructor(private httpClient: HttpClient) { }

  getUrl(td:boolean,withId:boolean,id?:Number):string{
    return `${BASE_URL}${td?'todolist':'task'}/${withId? `${id}` : ''}`;
  }
  getall():Observable<TodoList[]>{
    return this.httpClient.get<TodoList[]>(BASE_URL);
  }
  deleteTask(id:Number){
    return this.httpClient.delete(this.getUrl(false,true,id));
  }
  deleteTodoList(id:Number){
    return this.httpClient.delete(this.getUrl(true,true,id));
  }
  addTodoList(item:TodoList):Observable<TodoList>{
    return this.httpClient.post<TodoList>(this.getUrl(true,false),item);
  }
  addTask(item:AddTask):Observable<Task>{
    return this.httpClient.post<Task>(this.getUrl(false,false),item);
  }
  updateTask(item:Task):Observable<Task>{
    return this.httpClient.put<Task>(`${BASE_URL}${item.id}`,item);
  }
}
