import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Project } from '../interfaces/project';

const BASE_URL = "http://localhost:5001/api/recruitment/";

@Injectable({
  providedIn: 'root'
})
export class RecruitmentInfoService {

  constructor(private httpClient: HttpClient) { }
  
  getUrl(id:Number) {
    return `${BASE_URL}${id}`;
  }

  all() {
    return this.httpClient.get(BASE_URL);
  }

  create(project : Project) {
    project.ownerId = 1;
    if(project.applicationDate == null){
      project.applicationDate = new Date();
    }
    if(project.id == null){
      project.id = 1;
    }
    return this.httpClient.post(BASE_URL, project);
  }

  delete(projectId:Number) {
    return this.httpClient.delete(this.getUrl(projectId));
  }
  update(project:Project){
    return this.httpClient.put(this.getUrl(project.id),project);
  }
}
