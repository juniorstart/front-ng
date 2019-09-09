import { Component, OnInit } from '@angular/core';
import {RecruitmentInfoService } from '../services/recruitment-info.service';
import { Project } from '../interfaces/project';

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
  selectProject(project) {
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
    //this.projects$ = this.projectsService.all();
    this.projects$ = this.recruitmentInfoService.all();
  }
  saveProject(project) {
    if(!project.id) {
      this.createProject(project);
    }
  }

  createProject(project) {
    this.recruitmentInfoService.create(project)
      .subscribe(result => {
        this.getProjects();
        this.resetProject();
      });
  }
  deleteProject(project) {
    this.recruitmentInfoService.delete(project.id)
      .subscribe(result => this.getProjects());
  }

  cancel() {
    this.resetProject();
  }
}
