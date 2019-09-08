import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Project } from 'projects/core-data/src/lib/project';

@Component({
  selector: 'app-recruitment-info-details',
  templateUrl: './recruitment-info-details.component.html',
  styleUrls: ['./recruitment-info-details.component.scss']
})
export class RecruitmentInfoDetailsComponent {
  currentProject: Project;
  originalTitle;
  newDateOfCompanyReply;
  newApplicationDate;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  @Input() set project(value) {
    if(value) this.originalTitle = value.companyName;
    this.newDateOfCompanyReply =  new Date(value.dateOfCompanyReply);
    this.newApplicationDate =  new Date(value.applicationDate);
    this.currentProject = Object.assign({}, value);
  };

}
