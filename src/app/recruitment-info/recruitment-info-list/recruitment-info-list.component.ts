import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Project } from 'projects/core-data/src/lib/project';

@Component({
  selector: 'app-recruitment-info-list',
  templateUrl: './recruitment-info-list.component.html',
  styleUrls: ['./recruitment-info-list.component.scss']
})
export class RecruitmentInfoListComponent {
  @Input() projects: Project[];
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();

}
