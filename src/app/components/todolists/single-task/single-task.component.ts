import { Component, Input, Output,EventEmitter } from '@angular/core';
import { TaskInterface } from 'src/app/interfaces/taskInterface';

@Component({
  selector: 'app-single-task',
  templateUrl: './single-task.component.html',
  styleUrls: ['./single-task.component.scss']
})
export class SingleTaskComponent {
  @Input() task: TaskInterface[];
  @Output() statusChange = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
