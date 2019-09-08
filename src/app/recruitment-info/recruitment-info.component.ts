import { Component, OnInit } from '@angular/core';
import {CoreDataService } from 'projects/core-data/src/lib/core-data.service';
import { Project } from 'projects/core-data/src/lib/project';

@Component({
  selector: 'app-recruitment-info',
  templateUrl: './recruitment-info.component.html',
  styleUrls: ['./recruitment-info.component.scss']
})
export class RecruitmentInfoComponent implements OnInit {
  primaryColor = 'red';
  projects$;
  selectedProject: Project;

  constructor(private projectsService: CoreDataService) { }

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
    this.projects$ = this.projectsService.getFake();
  }
  saveProject(project) {
    if(!project.id) {
      this.createProject(project);
    }
  }

  createProject(project) {
    this.projectsService.create(project)
      .subscribe(result => {
        this.getProjects();
        this.resetProject();
      });
  }
  deleteProject(project) {
    this.projectsService.delete(project.id)
      .subscribe(result => this.getProjects());
  }

  cancel() {
    this.resetProject();
  }
}
