import { Component, Input, Output } from '@angular/core';
import { TodolistService } from 'src/app/services/todolist.service';
import { EventEmitter } from '@angular/core';
import { Task } from 'src/app/interfaces/task.interface';
import { TodoList } from 'src/app/interfaces/todolist.interface';

@Component({
  selector: 'app-todolist-list',
  templateUrl: './todolist-list.component.html',
  styleUrls: ['./todolist-list.component.scss']
})
export class TodolistListComponent  {

  @Input() todoLists: TodoList[];
  @Output() notify: EventEmitter<Task> = new EventEmitter();
  @Output() delete: EventEmitter<Task> = new EventEmitter();

  trackByFunc(index,item) {
    if(!item) return null;
    return item.id;
  }

  Delete(task: Task) {
    this.delete.emit(task);
  }
  ChangeStatus(task: Task) {
    this.notify.emit(task);
  }
}
