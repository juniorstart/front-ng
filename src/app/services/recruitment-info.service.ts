import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../interfaces/project';
import { Observable } from 'rxjs';
import { TaskInterface } from '../interfaces/taskInterface';
import { Pipe } from '@angular/compiler/src/core';
import { AsyncPipe } from '@angular/common';

const BASE_URL = "http://localhost:5001/api/recruitment/";

@Injectable({
  providedIn: 'root'
})
export class RecruitmentInfoService {

  constructor(private httpClient: HttpClient) { }
  
  getUrl(id:number):string {
    return `${BASE_URL}${id}`;
  }

  all():Observable<any> {
    console.log(this.httpClient.get(BASE_URL));
    return this.httpClient.get(BASE_URL);
  }

  create(project : Project):Observable<any> {
    project.ownerId = 1;
    if(project.applicationDate == null){
      project.applicationDate = new Date();
    }
    if(project.id == null){
      project.id = 1;
    }
    return this.httpClient.post(BASE_URL, project);
  }

  delete(projectId:number) {
    return this.httpClient.delete(this.getUrl(projectId));
  }
  update(project:Project){
    return this.httpClient.put(this.getUrl(project.id),project);
  }
}
