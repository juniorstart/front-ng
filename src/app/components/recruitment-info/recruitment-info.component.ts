import { Component, OnInit } from '@angular/core';
import {RecruitmentInfoService } from '../../services/recruitment-info.service';
import { Project } from '../../interfaces/project';

@Component({
  selector: 'app-recruitment-info',
  templateUrl: './recruitment-info.component.html',
  styleUrls: ['./recruitment-info.component.scss']
})
export class RecruitmentInfoComponent implements OnInit {
  primaryColor = 'red';
  projects$;
  selectedProject: Project;

  constructor(private recruitmentInfoService: RecruitmentInfoService) { }

  ngOnInit() {
    this.getProjects();
    this.resetProject();
  }
  selectProject(project:Project) {
    this.selectedProject = project;
  }

  resetProject() {
    const emptyProject: Project = {
      id: null,
      companyName: "",
      city: "",
      workPlace: "",
      dateOfCompanyReply: null,
      applicationDate: null,
      companyReply: false,
      notes: "",
      linkToApplication: "",
      ownerId: null
    }
    this.selectProject(emptyProject);
  }

  getProjects() {
    this.projects$ = this.recruitmentInfoService.all();
    
    if(this.projects$ === null){
      this.projects$ = this.resetProject();
    }
  }
  saveProject(project:Project) {
    
    if(!project.id) {
      this.recruitmentInfoService.create(project).subscribe(result=>this.getProjects());
    }
    else{
      this.recruitmentInfoService.update(project).subscribe(result=>this.getProjects());
    }
  }
  updateProject(project:Project){
    this.recruitmentInfoService.update(project).subscribe(result=> this.getProjects());
  }
  createProject(project:Project) {
    this.recruitmentInfoService.create(project)
      .subscribe(result => {
        this.getProjects();
        this.resetProject();
      });
  }
  deleteProject(project:Project) {
    this.recruitmentInfoService.delete(project.id)
      .subscribe(result => this.getProjects());
  }

  cancel() {
    this.resetProject();
  }
}
