
import { Observable } from 'rxjs';
import {Project} from '../interfaces/project.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const BASE_URL = "http://localhost:5001/api/recruitment/";

@Injectable({
  providedIn: 'root'
})
export class RecruitmentInfoService {

  constructor(private httpClient: HttpClient) { }
  
  getUrl(id:number):string {
    return `${BASE_URL}${id}`;
  }

  all():Observable<Project[]> {
    return this.httpClient.get<Project[]>(BASE_URL);
  }

  create(project : Project):Observable<Project> {
    project.ownerId = 1;
    if(project.applicationDate == null){
      project.applicationDate = new Date();
    }
    if(project.id == null){
      project.id = 1;
    }
    return this.httpClient.post<Project>(BASE_URL, project);
  }

  delete(projectId:number) {
    return this.httpClient.delete(this.getUrl(projectId));
  }
  update(project : Project){
    return this.httpClient.put<Project>(this.getUrl(project.id),project);
  }
}
