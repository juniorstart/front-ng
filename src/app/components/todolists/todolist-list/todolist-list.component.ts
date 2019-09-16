import { Component, Input, Output } from '@angular/core';
import { TodoListInterface } from 'src/app/interfaces/todolistInterface';
import { TodolistService } from 'src/app/services/todolist.service';
import { EventEmitter } from '@angular/core';
import { TaskInterface } from 'src/app/interfaces/taskInterface';

@Component({
  selector: 'app-todolist-list',
  templateUrl: './todolist-list.component.html',
  styleUrls: ['./todolist-list.component.scss']
})
export class TodolistListComponent  {

  @Input() todoLists: TodoListInterface[];
  @Output() notify: EventEmitter<TaskInterface> = new EventEmitter();
  @Output() delete: EventEmitter<TaskInterface> = new EventEmitter();

  trackByFunc(index,item){
    if(!item) return null;
    return item.id;
  }

  Delete(task:TaskInterface){
    this.delete.emit(task);
    
  }
  ChangeStatus(task:TaskInterface){
    this.notify.emit(task);
  }
}
