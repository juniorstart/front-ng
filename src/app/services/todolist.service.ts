import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

const BASE_URL = 'http://localhost:5001/api/todolists/';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {

  constructor(private httpClient: HttpClient,private cookies: CookieService) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer ' + this.cookies.get('jwt').split('"')[1]
    })
  };

  getUrl(id,td:boolean,withId:boolean){
    return `${BASE_URL}${td?'todolist':'task'}/${withId? `${id}` : ''}${id}`;
  }
  getall(){
    return this.httpClient.get(BASE_URL);
  }

}
