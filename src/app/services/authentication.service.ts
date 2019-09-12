import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { LoginInterface } from '../interfaces/loginInterface';
import { RegisterInterface } from '../interfaces/registerInterface';

const BASE_URL = "http://localhost:5001/";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient,private cookies: CookieService) { }

  setToken(token:string){
    this.cookies.set('jwt', token);
  }

  login(data: LoginInterface){
    console.log(data);
    return this.httpClient.post(BASE_URL + 'login',data);
  }
  register(data: RegisterInterface){
    return this.httpClient.post(BASE_URL + 'register',data);
  }
  isAuthenticated(){
    return this.cookies.get('jwt') !== null; 
  }
}
