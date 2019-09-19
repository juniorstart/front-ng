import { Component, OnInit } from '@angular/core';
import { TodoList } from '../../interfaces/todolist.interface';
import { Task } from '../../interfaces/task.interface';
import { TodolistService } from '../../services/todolist.service';
import { AddTask } from '../../interfaces/addTask.interface';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Todolistsdataprovider } from 'src/app/data-providers/todolists.data-provider';

@Component({
  selector: 'app-todolists',
  templateUrl: './todolists.component.html',
  styleUrls: ['./todolists.component.scss']
})
export class TodolistsComponent implements OnInit {

  TodoListToAdd: TodoList;
  TaskToAdd: AddTask;
  todolists$;
  updateTask;
  
  constructor(private todolistService:TodolistService,private toastr: ToastrService,private prepareData:Todolistsdataprovider) { }

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

  addTask(item:AddTask){
    this.todolistService.addTask(item).subscribe(result=>this.getTodoLists());
    this.toastr.success("Task added");
  }
  deleteTask(item:Task){
    this.todolistService.deleteTask(item.id);
    this.toastr.success("Task deleted");
  }
}
