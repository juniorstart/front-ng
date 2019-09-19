import { Component, OnInit } from '@angular/core';
import { TodoListInterface } from '../../interfaces/todolistInterface';
import { TaskInterface } from '../../interfaces/taskInterface';
import { TodolistService } from '../../services/todolist.service';
import { AddTaskInterface } from '../../interfaces/addTaskInterface';
import { TodolistsdataproviderService } from 'src/app/data-providers/todolistsdataprovider.service';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

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
  constructor(private todolistService:TodolistService,private prepareData:TodolistsdataproviderService,private toastr: ToastrService) { }

  ngOnInit() {
    this.getTodoLists();
  }

  getTodoLists(){
      this.todolists$ = this.todolistService.getall();
  }
  onNotify(item){
    this.todolistService.updateTask(item).subscribe(result=>result);
    this.toastr.success("Task updated");
  }
  addTodoList(item){
    this.prepareData.prepareTodoListData(item.name).subscribe(result=>this.getTodoLists());
    this.toastr.success("TodoList added");
  }

  addTask(item:AddTaskInterface){
    this.todolistService.addTask(item).subscribe(result=>this.getTodoLists());
    this.toastr.success("Task added");
  }
  deleteTask(item:TaskInterface){
    this.todolistService.deleteTask(item.id);
    this.toastr.success("Task deleted");
  }
}
