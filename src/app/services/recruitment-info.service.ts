import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

const BASE_URL = "http://localhost:5001/api/recruitment/";


@Injectable({
  providedIn: 'root'
})
export class RecruitmentInfoService {

  constructor(private httpClient: HttpClient,private cookies: CookieService) { }
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': this.cookies.get('jwt')
    })
  };


  getUrl(id) {
    return `${BASE_URL}${id}`;
  }

  all() {
    return this.httpClient.get(BASE_URL,this.httpOptions);
  }

  create(project) {
    return this.httpClient.post(BASE_URL, project,this.httpOptions);
  }

  delete(projectId) {
    return this.httpClient.delete(this.getUrl(projectId),this.httpOptions);
  }
}
