import { Component, OnInit } from '@angular/core';
import { TodoListInterface } from '../../interfaces/todolistInterface';
import { TaskInterface } from '../../interfaces/taskInterface';
import { TodolistService } from '../../services/todolist.service';
import { AddTaskInterface } from '../../interfaces/addTaskInterface';
import { TodolistsdataproviderService } from 'src/app/data-providers/todolistsdataprovider.service';

@Component({
  selector: 'app-todolists',
  templateUrl: './todolists.component.html',
  styleUrls: ['./todolists.component.scss']
})
export class TodolistsComponent implements OnInit {

  TodoListToAdd: TodoListInterface;
  TaskToAdd: AddTaskInterface;
  todolists$;
  updateTask;
  constructor(private todolistService:TodolistService,private prepareData:TodolistsdataproviderService) { }

  ngOnInit() {
    this.getTodoLists();
  }

  getTodoLists(){
      this.todolists$ = this.todolistService.getall();
  }
  onNotify(item){
    console.log(item);
    this.todolistService.updateTask(item).subscribe(result=>this.getTodoLists());
  }
  addTodoList(item){
    this.prepareData.prepareTodoListData(item.name).subscribe(result=>this.getTodoLists());
  }

  addTask(item:AddTaskInterface){
    this.todolistService.addTask(item).subscribe(result=>this.getTodoLists());
  }
  deleteTask(item:TaskInterface){
    this.todolistService.deleteTask(item.id).subscribe(result=>this.getTodoLists());
  }
}
