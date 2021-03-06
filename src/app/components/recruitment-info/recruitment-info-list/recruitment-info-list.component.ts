import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Project } from '../../../interfaces/project.interface';

@Component({
  selector: 'app-recruitment-info-list',
  templateUrl: './recruitment-info-list.component.html',
  styleUrls: ['./recruitment-info-list.component.scss']
})
export class RecruitmentInfoListComponent {
  @Input() projects: Project[];
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();

  delete(project:Project){
    this.deleted.emit(project);
  }
}
