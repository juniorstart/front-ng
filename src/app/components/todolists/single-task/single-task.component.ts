import { Component, Input, Output,EventEmitter } from '@angular/core';
import { Project } from '../../../interfaces/project.interface';
import { Task } from 'src/app/interfaces/task.interface';


@Component({
  selector: 'app-single-task',
  templateUrl: './single-task.component.html',
  styleUrls: ['./single-task.component.scss']
})

export class SingleTaskComponent {
  @Input() task: Task;
  @Output() statusChange = new EventEmitter();
  @Output() deleted = new EventEmitter();

  delete(project:Project){

    this.deleted.emit(project);
  }
  changeStatus(event){
    
    this.statusChange.emit(event);
  }
}
